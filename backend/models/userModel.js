import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: { type: String, required:true},
    isAdmin: { type: Boolean, default: false, required: true},
    confirmed: {type:Boolean, default:false, required: true},
    resetLink: {type: String, default: ''},
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

export default User;
