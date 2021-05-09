import React from 'react'
import { Link } from 'react-router-dom';

export default function RespNavBar() {

    return (
        <div className='Resp-M'>
            
              <ul>
                <li><Link to='/news'>News</Link></li>
                <li><Link to='/accessories'>Accessories</Link></li>
                <li><Link to='/cosmetics'>Cosmetics</Link></li>
                <li><Link to='/perfumes'>Perfumes</Link></li>
                <li><Link to='/gadgets'>Gadgets</Link></li>
                <li><Link to='/toyes'>Toyes</Link></li>
                <li><Link to='/sales'>Sale</Link></li>
             </ul>
             <div className='Gen-cat-Resp'>
                 <ul>
                     <li><Link to='/man'>Men</Link></li>
                     <li><Link to='/women'>Women</Link></li>
                     <li><Link to='/kids'>Kids</Link></li>
                 </ul>
             </div>
        </div>
    )
}
