import React from 'react';
import logo from '../Apple-Logo.png';
import cart from '../cart-img.png'

export default function Header(props){
    return (<header className='row block center'>
    <div>
        <a href='#/'><img className='logo' src={logo}/></a>
    </div>
    <div>
        <a href='/cart'><img className='cartLogo' src={cart} /></a>
    </div>
    </header>)
}