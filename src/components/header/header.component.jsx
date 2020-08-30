import React from 'react';
import { Link } from 'react-router-dom'
import './header.styles.scss';

const Header = () => {
    return (
        <div className={`header`}>
            <Link className={`logo-container`} to='/'>
                <h1 className={`header-logo`}> CAR TRUB </h1>
            </Link>
            <div className={`options`}>
                <Link className={`option`} to='/services'> Services </Link>
                <Link className={`option`} to='/cases'> Cases </Link>
                <Link className={`option`} to='/squad'> Squad </Link>
                <Link className={`option`} to='/blog'> Blog </Link>
                <Link className={`option`} to='/contact'> Contact </Link>
            </div>
            </div>
    )


}
export default Header;