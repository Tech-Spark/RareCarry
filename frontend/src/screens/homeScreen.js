import React, { useEffect} from 'react'
import LoadingBox from '../components/loadingBox';
import MessageBox from '../components/messageBox';
import { useDispatch, useSelector} from 'react-redux';
import { listProducts } from '../actions/productAction';
import AccessoPick from '../components/AccessoPick';
import NewArrival from '../components/NewArrival';
import CosmeticsPick from '../components/CosmeticsPick';
import EverydayPick from '../components/EverydayPick';
import GadgetsPick from '../components/GadgetsPick';
import ToyesPick from '../components/ToyesPick';

function HomeScreen(props) {
const dispatch = useDispatch();
const productList = useSelector((state) => state.productList);
const { loading, error, products} = productList;


    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    
    return (
        <>
         {loading ? ( 
           <LoadingBox></LoadingBox>
           )
            : error ? (
               <MessageBox variant='danger'>{error}</MessageBox>
            )   
            : (
        <article className='content'>
            <NewArrival products={products}/>
            {/* <div className='banner-mini-add'>
                <img src='/images/banner11.jpg' alt='mini-banner-add'></img>
            </div> */}
            <AccessoPick products={products}/>
            <CosmeticsPick products={products}/>
            {/* <div className='banner-mini-add'>
                <img src='/images/banner22.jpg' alt='mini-banner-add'></img>
            </div> */}
            <EverydayPick products={products}/>
            <GadgetsPick products={products}/>
            <ToyesPick products={products}/>
        </article>
            )}
    </>
    )
}

export default HomeScreen;