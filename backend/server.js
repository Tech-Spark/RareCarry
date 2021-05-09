import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/firstEcomWeb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.get('/api/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
})

app.get('/', (req, res) => {
    res.send('Server is ready');
});
// to display error message in the forntend
app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
});
// production

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('frontend/build'));
}
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});


