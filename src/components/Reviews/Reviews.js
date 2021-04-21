import React, { useEffect, useState } from 'react';
import './Reviews.css';
import messi from '../../images/messi.jpg';
import cr7 from '../../images/ronaldo.jpg';
import SingleReview from './SingleReview/SingleReview';


const reviewData = [
    {
        name: 'Leonel Messi',
        image: messi,
        speech: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eaque temporibus commodi quod dicta ipsum."
    },
    {
        name: ' Cristiano Ronaldo',
        image: cr7,
        speech: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eaque temporibus commodi quod dicta ipsum."
    }
]

const Reviews = () => {
    const [reviews, setReviews] = useState();

    useEffect(() =>{
        fetch('http://localhost:4000/allReviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[]);

    return (
        <div className="reviews container">
            <h1>What Our Customer's Says About As</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, minus.</p>

            <div className="row justify-content-around">
                    {
                        reviews && reviews.map(review => <SingleReview review={review}></SingleReview>)
                    }
            </div>
            

        </div>
    );
};

export default Reviews;