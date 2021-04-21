import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './SingleReview.css'
const SingleReview = (props) => {
    const {name, description} = props.review;
    return (
        <div className="review-col col-md-5 col-sm-12">
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <div style={{ marginLeft: "10px"}}>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;