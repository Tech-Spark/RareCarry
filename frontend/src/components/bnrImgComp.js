import React from 'react';

function ImgComp({src}) {
    const imgStyle = {
        width:100 + '%',
        height: 'auto',
        objectFit: 'cover'
    }
    return <img src={src} alt='sldie-img' style={imgStyle}></img>
}

export default ImgComp;