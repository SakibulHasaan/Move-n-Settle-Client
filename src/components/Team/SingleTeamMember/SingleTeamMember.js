import React from 'react';
import './SingleTeamMember.css'

const SingleTeamMember = (props) => {
    const {image, name} = props.data;
    return (
        <div className="team-col">
            <img src={image} alt=""/>
            <h4>{name}</h4>
        </div>
    );
};

export default SingleTeamMember;