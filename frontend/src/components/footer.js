import React from 'react';
import { Link } from 'react-router-dom';

function FooterComp() {
    return (
            <section className='footer'>
                <div className='footer-container'>
                    <div className='Links-gfh'>
                        <div className='Help-contact'>
                            <h3>Help Center</h3>
                            <ul>
                                <li><Link to='#'>Paying by invoice</Link></li>
                                <li><Link to='#'>Payment issues</Link></li>
                                <li><Link to='#'>Report a damaged item</Link></li>
                                <li><Link to='#'>Discover RareCarry plus</Link></li>
                            </ul>
                        </div>
                        <div className='gift-cards'>
                            <h3>Delivery Information</h3>
                            <ul>
                                <li><Link to='#'>Delivery information</Link></li>
                                <li><Link to='#'>Track your parcel</Link></li>
                                <li><Link to='#'>Return an order</Link></li>
                                <li><Link to='#'>Express Delivery</Link></li>
                            </ul>
                        </div>
                        <div className='about-us'>
                            <h3>About Us</h3>
                            <ul>
                                <li><Link to='#'>Who we are?</Link></li>
                                <li><Link to='#'>Work with Us</Link></li>
                                <li><Link to='#'>Read Our Blogs</Link></li>
                                <li><Link to='#'>Contact Us</Link></li>
                            </ul>
                            </div>
                        </div>
                        <div className='Links-gfh2'>
                            <div className='our-partners'>
                            <h3>Our partners</h3>
                            <ul className='our-pt-logo'>
                                <li><Link to='#'><img src='/images/ctt.png' alt='ctt-delivery'/></Link></li>
                                <li><Link to='#'><img src='/images/dhl.png' alt='dhl'/></Link></li>
                                <li><Link to='#'><img src='/images/dpd.png' alt='dpd'/></Link></li>
                                <li><Link to='#'><img src='/images/FedEx.png' alt='fedEx'/></Link></li>
                            </ul>
                            </div>
                            <div className='payment-methods'>
                                <h3>Our payment methods</h3>
                                <ul className='payWay'>
                                    <li><Link to='#'><img src='/images/visa.png' alt='visa'/></Link></li>
                                    <li><Link to='#'><img src='/images/master.jpg' alt='master'/></Link></li>
                                    <li><Link to='#'><img src='/images/paypal.png' alt='paypal'/></Link></li>
                                    <li><Link to='#'><img src='/images/amex.png' alt='americanExpress'/></Link></li>
                                </ul>
                            </div>
                            <div className='our-pormis'>
                            <h3>Our Provieses</h3>
                            <ul>
                                <li><Link to='#'>Free delivery and returns</Link></li>
                                <li><Link to='#'>30-days retrun policy</Link></li>
                                <li><Link to='#'>Flexible payment options</Link></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    <div className='footer-bottom'>
                        <div className='ft-bottom-container'>
                        <div className='terms'>
                            <ul>
                                <li><Link to='#'>Terms and Conditions</Link></li>
                                <li><Link to='#'>Privacy Notice</Link></li>
                                <li><Link to='#'>Data preference</Link></li>
                            </ul>
                        </div>
                        <div className='Social-links'>
                            <ul>
                                <li><Link to='#'><i className="so-link fa fa-facebook-square"></i></Link></li>
                                <li><Link to='#'><i className="so-link fa fa-twitter-square"></i></Link></li>
                                <li><Link to='#'><i className="so-link fa fa-instagram"></i></Link></li>
                                <li></li>
                            </ul>
                        </div>
                        </div>
                    </div>
            </section>
    )
}

export default FooterComp;