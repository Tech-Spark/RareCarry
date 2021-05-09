import data from './data.js';
import Product from './models/productModel.js';
import User from './models/userModel.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
// product import to atlas
export const  importData = async () => {
    try{
        await Product.insertMany(data.products)
        console.log('Data successfully imported');
        process.exit();
    }catch(err){
        console.log(`ERROR: ${err}`);
        process.exit();
    }
}

export const deleteData = async () => {
    try {
        await Product.deleteMany({});
        console.log('Data successfully deleted');
        process.exit();
    }catch(err){
        console.log(`ERROR: ${err}`);
        process.exit();
    }
}

if(process.argv[2] === '--import'){
    console.log('mongodb atlas connection is successfull');
    importData();
}else if(process.argv[2] === '--delete'){
    deleteData();
}

// private user import to atlas
export const  importPrivateUserData = async () => {
    try{
        await User.insertMany(data.users)
        console.log('Data successfully imported');
        process.exit();
    }catch(err){
        console.log(`ERROR: ${err}`);
        process.exit();
    }
}

if(process.argv[2] === '--importUser'){
    console.log('Mongodb atlas connection is successfull');
    importPrivateUserData();
}
