import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: {type: String, required: true},
    name: { type: String, required: true},
    image: [],
    color:[],
    brand: { type: String, required: true},
    category: {
         gender: { type: String},
         belong: {type: String},
         span: {type: String}
    },
    description: {
        materiel:{type: String, required: true},
        details: {type: String, required: true},
    },
    price: { type: Number, required: true},
    countInStock: { type: Number, default:0, required: true},
    rating: { type: Number, default:0, required: true},
    numReviews: { type: Number,default: 0, required: true},
},
{
    timestamps:true,
});

const Product = mongoose.model('Product', productSchema);

export default Product;