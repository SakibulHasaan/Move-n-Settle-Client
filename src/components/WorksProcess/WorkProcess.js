import React from 'react';
import SingleWork from './SingleWork/SingleWork';
import './WorkProcess.css'
import contract from "../../images/contract.png"
import box from "../../images/open-box.png"
import truck from "../../images/truck.png"
import carrying from "../../images/men-carrying-a-box.png"
const WorkData = [
    {
        image: contract,
        title: "Book Your Service"
    },
    {
        image: box,
        title: "Pack Your Good"
    },
    {
        image: truck,
        title: "Safe Loading"
    },
    {
        image: carrying,
        title: "Safe Delivery"
    }

]


const WorkProcess = () => {
    return (
        <section className="workProcess">
            <h1>Our Work Process</h1>
            <p>Its this founding principle that has helped our organisation as well as our clients become a defining force in the industry.</p>
            <div className="work-row">
                {
                    WorkData.map( (data) => <SingleWork data={data}/>)
                }
            </div>
        </section>
    );
};

export default WorkProcess;