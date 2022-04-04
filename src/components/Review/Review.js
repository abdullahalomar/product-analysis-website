import React from 'react';
import './Review.css'


const Review = (props) => {
    const { name, picture, desc, ratting } = props.review;
    return (
        <div className='review-detl'>
            <img src={picture} alt="" />
            <h4>Name: {name}</h4>
            <h5>Description: {desc}</h5>
            <p>Ratting: { ratting }</p>
        </div>
    );
};

export default Review;