import React, { useEffect, useState } from 'react';
import SingleService from './SingleService/SingleService';
import './Services.css'
import { Link } from 'react-router-dom';
const Data = [
    {
        id: 1,
        image: "",
        title: "Service One",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ea! Neque qui voluptatibus optio accusantium perferendis corrupti alias animi laborum."
    },
    {
        id: 2,
        image: "",
        title: "Service Two",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ea! Neque qui voluptatibus optio accusantium perferendis corrupti alias animi laborum."
    },
    {
        id: 3,
        image: "",
        title: "Service Three",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ea! Neque qui voluptatibus optio accusantium perferendis corrupti alias animi laborum."
    }
]

const Services = () => {

    const [Services, setServices] = useState();
    useEffect(() =>{
        fetch('http://localhost:4000/allServices')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);

    return (
        <section className="service" id="services">
            <h1>Services We Offer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, fugit!</p>

            <div className="row" >

                {
                    Services && Services.map(service =>

                        <Link to={`/checkout/${service._id}`}>

                            <SingleService service={service} />

                        </Link>

                    )
                }
            </div>

        </section>
    );
};

export default Services;