import React, { useEffect, useState } from 'react';
import SingleService from './SingleService/SingleService';
import './Services.css'
import { Link } from 'react-router-dom';

const Services = () => {

    const [Services, setServices] = useState();
    useEffect(() => {
        fetch('http://localhost:4000/allServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <section className="service">
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <h1>Services We Offer</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, fugit!</p>
            </div>

            <div className="row justify-content-around">
                {
                    Services && Services.map(service =>
                        <div className="service-col col-md-4 col-sm-12 service-div">
                            <Link to={`/checkout/${service._id}`}>
                                <SingleService service={service} />
                            </Link>
                        </div>
                    )
                }
            </div>

        </section>
    );
};

export default Services;