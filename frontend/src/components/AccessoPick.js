import React from 'react'
import { Link } from 'react-router-dom';


export default function AccessoPick(props) {
    const {products} = props;
    const accessoPdt = products.filter((items) => items.category.belong === 'accessories');

    return (
            <div>
                <div className='new-arri-title'>   
                    <h3>Accessories</h3>
                    <Link to='/accessories'>View more</Link>
                </div>
                <ul className='products'>
                    {
                        accessoPdt.slice(0, 5).map(product => (
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
