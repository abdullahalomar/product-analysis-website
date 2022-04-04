import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import MainContent from '../MainContent/MainContent';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <CustomLink to="/Home">Home</CustomLink>
                <CustomLink to="/reviews">Reviews</CustomLink>
                <CustomLink to="/dashboard">Dashboard</CustomLink>
                <CustomLink to="/blogs">Blogs</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </nav>
            <div>
            <MainContent></MainContent>
            </div>
        </div>
    );
};

export default Header;