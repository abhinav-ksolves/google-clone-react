import React from 'react';
import './Home.css';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Search from './Search';

function Home() {
    return (
        <div className="home">
            <div className="header">
                <div className="left">
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className="right">
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>
            <div className="body">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    alt="google-text-image" />
                <Search />
            </div>
        </div>
    )
}

export default Home;
