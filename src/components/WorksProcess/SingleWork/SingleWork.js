import React from 'react';
import "./SingleWork.css"

const SingleWork = (props) => {
    const {image, title} = props.data;
    return (
        <div className="work-col">
            <img src={image} alt=""/>
            <h4>{title}</h4>
        </div>
    );
};

export default SingleWork;