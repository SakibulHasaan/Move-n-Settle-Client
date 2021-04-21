import React from 'react';
import './SingleService.css'

const SingleService = (props) => {
    const {name, description} = props.service;
    return (
        <div>
            <div>
            <h1>{name}</h1>
            <p>{description}</p>
            </div>
        </div>
    );
};

export default SingleService;