import React, { useState } from 'react';
import ImgComp from './bnrImgComp';
import {FaChevronLeft, FaChevronRight } from "react-icons/fa";
import e1 from '../pics/e1.jpg';
import e2 from '../pics/e2.jpg';
import e3 from '../pics/e3.jpg';
import e4 from '../pics/e4.jpg';
import e5 from '../pics/e5.jpg';

function BannerSect(){
    const [x, setX] = useState(0);
    let sliderArr = [
                     <ImgComp src={e1}/>,
                     <ImgComp src={e2}/>,
                     <ImgComp src={e3}/>,
                     <ImgComp src={e4}/>,
                     <ImgComp src={e5}/>,
                    ];
    // const autoPlay = useRef();
    // useEffect(() => {
    //     autoPlay.current = goRight;
    // },) 
    
    // useEffect(() => {
    //     const play = () => {
    //         autoPlay.current();
    //     }
    //     setInterval(play, 3000);
    // }, [])
    const goLeft = () =>{
    //   setX(x + 100);
            x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    };
    const goRight = () =>{
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
    }
 
    return (
        <>
          <section className='slider'>
              {
              sliderArr.map((item, index) => {
                    return (
                        <div key={index} className='slide' style={{transform:`translateX(${x}%)`}}>
                            {item}
                        </div>
                    )
              })
            }
            <button id='goLeft' onClick={goLeft}><FaChevronLeft size='3rem'></FaChevronLeft></button>
            <button id='goRight' onClick={goRight}><FaChevronRight size='3rem'></FaChevronRight></button>
          </section>          
        </>
    )
}

export default BannerSect;