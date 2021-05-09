import React, {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { accessoCatList } from '../actions/productAction';
import { Link } from 'react-router-dom';
import LoadingBox from '../components/loadingBox';
import MessageBox from '../components/messageBox';

function AccessoriesScreen () {
    const accessoCategory = useSelector((state) => state.accessoCatList);
    const {loading, error, products} = accessoCategory;
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(accessoCatList());
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
        <>
            <div className='women-container'>
                <div className='banner-mini-add'>
                    <img src='/images/Adbanner/banner11.png' alt='mini-banner-add'></img>
                </div> 
                <h3 className='women-cat-title'>Accessories area.</h3>
                <div>
                    <ul className='products'>
                    {
                    products.map(product => (
                        <li key={product._id}>
                            <div className='product'>
                            <Link to={`/product/${product._id}`}> 
                                    <img className='product-img' src={product.image[0]} alt=''></img>
                                </Link>
                                <div className='product-name'>
                                    <Link to={`/product/${product._id}`}>{product.name}</Link>
                                </div>
                                <div className='product-brand'>{product.brand}</div>
                                {/* <Rating rating={product.rating} numReviews={product.numReviews}/> */}
                                <div className='product-price'>Price: € {product.price}</div>
                            </div>
                        </li>
                        )
                    )
                }
                    </ul>
                </div>
            </div>
        </>
        )}
    </>
    )
}


export default AccessoriesScreen;
