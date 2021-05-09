import React, { useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {FaShippingFast } from 'react-icons/fa';
import {FcInTransit} from 'react-icons/fc';
import {GiReturnArrow} from 'react-icons/gi';
import {BsChevronDown} from 'react-icons/bs';
import Rating from '../components/rating';
import LoadingBox from '../components/loadingBox';
import MessageBox from '../components/messageBox';
import { detailsProduct } from '../actions/productAction';


function ProductDtScreen(props){
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const [ qty, setQty] = useState(1);
    const [ index, setIndex] = useState(0);
    const myRef = useRef(null);
    const productDetails = useSelector((state) => state.productDetails);
    const {loading, error, product} = productDetails;
    const [materiel, setMateriel] = useState(false);
    const [details, setDetails] = useState(false);
    useEffect(() =>{
        dispatch(detailsProduct(productId));
        // myRef.current.children[index].className = 'img-active';
    }, [dispatch, productId]);

    const addToCart = () => {
        props.history.push(`/cart/${productId}?qty=${qty}`);
    }
    const handleTab = (index) => {
        setIndex(index);
       const images = myRef.current.children;
       for(let i = 0; i < images.lenght; i++){
            images[i].className = images[i].className.replace('img-active', '');
       }
       images[index].className = 'img-active';
    }

    return (
    <>
        {loading ? ( 
            <LoadingBox></LoadingBox>
            )
             : error ? (
                <MessageBox variant='danger'>{error}</MessageBox>
             )   
             : (
        <section className='product-details'>
             <div className='back-to-main'><i className="fa fa-angle-double-left"></i><Link to='/'>Back</Link></div>
            <div className='details'>  
                <div className='images'>
                    <div className='img-gallery'>
                        <ul className='gallery'  ref={myRef}>
                            {product.image.map((img, index) => (
                            <li key={index}>
                                <img 
                                    src={img} 
                                    alt=''
                                    onClick={() => handleTab(index)}
                                ></img>
                            </li>
                            ))}
                        </ul>
                    </div>
                    <div className='img-view-box'>
                        <img src={product.image[index]} alt=''></img>
                    </div>
                </div>
                <div className='info'>
                    <div className='title-product'>
                        <b>{product.title}</b>
                        <h3>{product.name}</h3>
                        <span className='price'>€ {product.price} <em>VAT excluded</em></span>
                        <Rating rating={product.rating} numReviews={product.numReviews}/>
                        { product.countInStock > 0 ?
                         <p className='in-stock'>In Stock: <b>{product.countInStock}</b></p> :
                         <p className='unablpd'><b>Unavailable</b></p>
                        }
                        <b className='color-item'>Colour:</b>
                        {/* <ul className='Choose-color'>
                            <li><img src='#' alt='blue'/></li>
                            <li><img src='#' alt='blue'/></li>
                            <li><img src='#' alt='blue'/></li>
                        </ul> */}
                        {product.countInStock > 0 && (
                        <>
                            <div className='sel-qty'>
                              Qty: <select value={qty} onChange={ e => setQty(e.target.value)}>
                                    {
                                        [...Array(product.countInStock).keys()].map(x => (
                                            <option key={x +1 } value={x + 1}>{x + 1}</option>
                                        ))
                                    }    
                                  </select>  
                            </div>
                            <div className='add-to'>
                            <button onClick={addToCart}>Add to beg</button>
                            </div>
                        </>
                        )}
                    </div>
                    <div className='Delivery-berif'>
                        <ul className='deliveryli'>
                            <li>Sold and shipped by <strong>RareCarry</strong></li>
                            <li>
                                <ul>
                                    <li><FaShippingFast/></li>
                                    <li>2-5 working days</li>
                                    <li>Standard delivery <b>Free</b></li>
                                </ul>
                            </li>
                            <li><FcInTransit/><b>Free delivery and free returns</b></li>
                            <li><GiReturnArrow/><b>100 day return policy</b></li>
                        </ul>
                    </div>
                    <div className='product-description'>
                        <div className='prod-desc'>
                            <button onClick={() => setMateriel(!materiel)}>Material & care <b className='down-chevron'><BsChevronDown/></b></button>
                            { materiel && (
                                <div className='show-Materiels'>
                                    <p>{product.description.materiel}</p>
                                </div> 
                                )}
                            <button onClick={() => setDetails(!details)}>Details <b className='down-chevron'><BsChevronDown/></b></button>
                            {details && (
                                <div className='show-Details'>
                                    <p>{product.description.details}</p>
                                </div>
                                )}
                            <button>{product.brand}<b className='down-chevron'><BsChevronDown/></b></button>
                        </div>
                    </div>
                    <div className='write-rvw'>
                        <h3>Reviews</h3>
                        <div className='stars-rvw'></div>
                            <strong>{product.rating} <span>/5</span></strong>
                            <Rating rating={product.rating} numReviews={product.numReviews}/>
                        <div className='btn-ri-rvw'>
                            <Link to=''>Write a review</Link>
                        </div>
                    </div>
                </div>
            </div>
            <article className='simmilar-items'>
                <div className='simmilar-item'>
                    <div className='title-smlr'>
                        <h3> You may like simmilar-items:</h3>
                    </div>
                    <ul className='smlr-items'>
                        <li><img src='' alt=''></img></li>
                        <li><img src='' alt=''></img></li>
                        <li><img src='' alt=''></img></li>
                        <li><img src='' alt=''></img></li>
                    </ul>
                </div>
            </article>
        </section>

                    )};
    </>
    )                 
}

export default ProductDtScreen;
