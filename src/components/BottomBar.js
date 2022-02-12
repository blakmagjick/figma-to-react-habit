import React from 'react';
import './Components.css';

export default function BottomBar () {
    return (
        <div className='bottombar'> 
            <img id='home' alt='home button' src='/../../home.png' height='47px' />
            <img id='cart' alt='cart button' src='/../../cart.png' height='47px' />
            <img id='search' alt='search button' src='/../../search.png' height='47px' />
        </div>
    )
}
