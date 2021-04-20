import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './SingleReview.css'
const SingleReview = (props) => {
    const {image, name, speech} = props.review;
    return (
        <div className="review-col">
            <img src={image} alt=""/>
            <div>
                <h3>{name}</h3>
                <p>{speech}</p>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
            </div>
        </div>
    );
};

export default SingleReview;