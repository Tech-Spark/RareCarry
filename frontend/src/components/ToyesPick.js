import React from 'react'
import { Link } from 'react-router-dom';


export default function ToyesPick(props) {
    const {products} = props;
    const toyesPdt = products.filter((items) => items.category.belong === 'toyes');

    return (
            <div>
                <div className='new-arri-title'>   
                    <h3>Toyes</h3>
                    <Link to='/toyes'>View more</Link>
                </div>
                <ul className='products'>
                    {
                        toyesPdt.slice(0, 5).map(product => (
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
    )
}
