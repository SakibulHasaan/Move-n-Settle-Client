import React from 'react';
import { useForm } from 'react-hook-form';
import SideBar from '../SideBar/SideBar';

const AddAdmin = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {

        const adminInfo = {
            name: data.name,
            email: data.email
        };
        fetch('https://infinite-mountain-25271.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { "content-Type": 'application/json' },
            body: JSON.stringify(adminInfo)

        })
            .then(res => {
                console.log(res);
                alert("Admin Info Added");
            })
            reset();
    };

    return (
        <div>
            <SideBar />
            <div style={{ marginLeft: "300px" }}>
                <h1>Add Admin Data</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true })}  className="form-control w-50 m-3" placeholder="Name" />
                    {errors.name && <p className=" m-3">This field is required</p>}
                    <input {...register("email", { required: true })} className="form-control w-50 m-3" placeholder="Email" />
                    {errors.email && <p className=" m-3">This field is required</p>}
                    <input type="submit" className="btn btn-info w-25 m-3" />
                </form>
            </div>
        </div>
    );
};

export default AddAdmin;