/* eslint-disable no-undef */
import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import data from '../data.js';
import  jwt from "jsonwebtoken";
import User from '../models/userModel.js';
import { generateToken, isAuth} from '../utils.js';
import mailgun from "mailgun-js";
import dotenv from 'dotenv';

dotenv.config();

const DOMAIN = process.env.DOMAIN_KEY;
const mg = mailgun({apiKey: process.env.MAILGUN_APIKEY, domain: DOMAIN});
const userRouter = express.Router();
userRouter.get(
    '/seed', 
    expressAsyncHandler(async(req, res) => {
    const createdUsers = await User.insertMany(data.users);
    res.send({createdUsers});
}));

userRouter.post('/register', expressAsyncHandler(async (req, res) => {
    const {email, lastName, firstName, password} = req.body;
    const userExist = await User.findOne({email:email});
    if(userExist){
        return res.status(400).send({message: 'User with this email already exist'});
    }
        const user = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: bcrypt.hashSync(password, 8),
    });
        const createdUser = await user.save();
        const token = jwt.sign({id:createdUser._id}, process.env.JWT_ACC_ACTIVATE, {expiresIn:'10m'});
        const data = {
            from: 'noreplay@gmail.com',
            to: email,
            subject: 'Account activation Link',
            html: `<h2>Hello, ${firstName} ${lastName}</h2>
             <h3>Please click on the given link to activate your account! </h3>
             <p>${process.env.CLIENT_URL}/auth/activate/${token}</p>
             <em>Note: The email verificaton link will be expired in 10 minutes.</em>
            `
        };
        if(!createdUser){
            return res.status(400).send({message: 'Something went wrong when creating your account!!'});
        }else{
            mg.messages().send(data, function (error, body) {
                if(error){
                    createdUser.remove();
                    return res.status(404).send({
                        message: 'Ooops! Something went wrong! please try again later.'
                    })
                }else{
                    return res.send({message: 'An Email has been sent, Please verify your email by clicking the link!'});
                }
            });
        }   
}
));

userRouter.post(
    '/signin', 
    expressAsyncHandler(async(req, res) => {
        const user = await User.findOne({email:req.body.email});
        if(!user.confirmed){
            res.status(400).send({message: 'Please Confirmed your email address to login'});
        }
        else{
           if(bcrypt.compareSync(req.body.password, user.password)){
               res.send({
                   _id: user._id,
                   firstName:user.firstName,
                   lastName:user.lastName,
                   email:user.email,
                   confirmed:user.confirmed,
                   isAdmin: user.isAdmin,
                   token: generateToken(user),
               })
               return;
           } 
        }
        res.status(401).send({message: 'Invalid Email or Password'});
})
);
userRouter.put('/forgot', expressAsyncHandler(async (req, res) => {
        const email = req.body.email;
        const user = await User.findOne({email: email});
        if(!user){
            return res.status(400).send({message: 'User with this email does not exist'});
        }else{
            const token = jwt.sign({id: user._id}, process.env.RESET_PASSWORD_KEY, {expiresIn:'7d'});
            user.resetLink = token;
            const resetPass = await user.save();

            const data = {
            from: 'noreplay@gmail.com',
            to: email,
            subject: 'Password Reset Link',
            html: `<h2>Hello, ${user.firstName}</h2>
             <h3>Please click on the given link to Reset your password! </h3>
             <p>${process.env.CLIENT_URL}/reset-password/${token}</p>
             <em>Note: The email verificaton link will be expired in 10 minutes.</em>
            `
            };
            if(!resetPass){
                return res.status(400).send({message: 'Reset password link error!!'});
            }else{
                mg.messages().send(data, function (error, body) {
                    if(error){
                        return res.status(404).send({
                            message: 'Ooops! Something went wrong'
                        })
                    }else{
                        return res.send({message: 'An Email has been sent, Please follow the instructions!'});
                    }
                });
            }   
        } 
}));

userRouter.put('/reset-password', expressAsyncHandler(async (req, res) => {
    const {newPassword, token} = req.body;
    if(token){
        jwt.verify(
            token, 
            process.env.RESET_PASSWORD_KEY, 
            async (err, decodeData) => {
                if(err){
                    return res.status(401).send({message: 'Incorrect or Expired token'});
                }
                const {id} = decodeData;
                const user = await User.findOne({_id: id});
                if(user.resetLink != token){
                    return res.status(404).send({message: 'Your reset password link is invalid!!'});
                }
                if(!user && !user.resetLink){
                    return res.status(404).send({message: 'User with this email or token, does not exist'});
                }else if(newPassword){
                    user.password = bcrypt.hashSync(newPassword, 8);
                    user.resetLink = '';
                    const updatedUserInfo = await user.save();
                    if(updatedUserInfo){
                        console.log(updatedUserInfo);
                        res.send({message:'Password has been changed successfully!!'});
                    }
                }
            });
    }else {
        return res.status(404).send({message: 'Authentication error!!'});
    }
    
}));

userRouter.put('/auth/activate/:token', expressAsyncHandler(async (req, res) => {
    const {token} = req.params;
    if(token){
         jwt.verify(
             token, 
             process.env.JWT_ACC_ACTIVATE || 'somethingSecret',
             async (err, decodeToken) =>{
                if(err){
                    return res.status(404).send({message: 'Incorrect or Expired link.'});
                }
                const {id} = decodeToken;
                const userDtls = await User.findById({_id: id});
                if(userDtls){
                    if(userDtls.confirmed){
                     res.status(400).send({message: 'Your email is already  verified'});
                    }else{
                        userDtls.confirmed = true;
                        const vfEmail = await userDtls.save();
                        if(vfEmail){
                            return res.status(200).send({message:'Your Email verification is successfull, Please Login'});
                        }
                    }
                    
                }else{
                    res.status(404).send({message: 'Failed to verify email'});
                }
            });
    }
}));

userRouter.get('/:id', expressAsyncHandler(async(req, res) => {
    const user = await User.findById(req.params.id);
    if(user) {
        res.send(user);
    }else{
        res.status(404).send({message: 'User Not Found'});
    }
})
);

userRouter.put('/profile', isAuth, expressAsyncHandler(async (req, res) =>{
    const user = await User.findById(req.user._id);
    if(user) {
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.email = req.body.email;
        if(req.body.password) {
            user.password = bcrypt.hashSync(req.body.password, 8);
        }
        const updatedUser = await user.save();
        res.send({
            _id: updatedUser._id,
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            email: updatedUser.email,
            token: generateToken(updatedUser),
        })
    }else{
        return res.status(404).send({ message: 'User Information Could not be Updated'});
    }
}))
export default userRouter;