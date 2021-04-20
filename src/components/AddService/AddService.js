import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {

    const [manageServiceClicked, setManageServiceClicked] = useState(false);
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const serviceInfo = {
            name: data.name,
            price: data.price,
            description: data.description,
        }

        fetch('http://localhost:4000/addAService', {
            method: 'POST',
            headers: { "content-Type": 'application/json' },
            body: JSON.stringify(serviceInfo)
        })
            .then(res => {
                console.log(res);
                alert("Service Added Successfully");
            })

        reset();
    };

    return (
        <div className="p-5 mt-5">
            {
                <div className="w-50">
                    <h1 style={{ color: 'navy' }}>Add a Service to database</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input name="name" {...register("name")} required type="text" className="form-control" placeholder="Service Name" /><br />
                        <input name="price"  {...register("price")} type="text" className="form-control" placeholder="Service Price" /><br />
                        <input name="description"  {...register("description")} type="text" className="form-control" placeholder="Service description" /><br />
                        <input type="submit" className="btn btn-primary" />
                    </form>
                </div>
            }
        </div>
    );
};

export default AddService;