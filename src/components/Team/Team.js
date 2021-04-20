import React from 'react';
import SingleTeamMember from './SingleTeamMember/SingleTeamMember';
import './Team.css'
import team1 from '../../images/team-1.jpg'
import team2 from '../../images/team2.jpg'
import team3 from '../../images/team3.jpg'

const teamData = [
    {
        name: "António Guterres",
        image: team1,
    },
    {
        name: "Sam Kutesa",
        image: team2,
    },
    {
        name: "Peter Thomson",
        image: team3,
    }
]


const Team = () => {
    return (
        <div className="team">
            <h1>OUR TEAM</h1>

            <div className="row">
                {teamData.map((data) => <SingleTeamMember  data={data}/>)}
            </div>

        </div>
    );
};

export default Team;