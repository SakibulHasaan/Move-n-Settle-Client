import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import SideBar from '../SideBar/SideBar';

const AddReview = () => {
    const [loggedInUser] = useContext(UserContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {

        const reviewInfo = {

            name: loggedInUser.UserName,
            image: loggedInUser.userImage,
            description: data.review,
        }

        fetch('https://infinite-mountain-25271.herokuapp.com/addReview', {
            method: 'POST',
            headers: { "content-Type": 'application/json' },
            body: JSON.stringify(reviewInfo)

        })
            .then(res => {
                console.log(res);
                alert("Thanks for your kind review");
            })
        reset();
    };

    return (
        <div>
            <SideBar />
            <div style={{ marginLeft: "300px" }} >
                <h1 className=" ml-3">Add A Review Here</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("review", { required: true })} className="form-control w-50 m-3" placeholder="Write Your Review" />
                    {errors.review && <p className=" m-3">This field is required</p>}

                    <input type="submit" className="btn btn-info w-25 m-3" />
                </form>
            </div>

        </div>


    );
};

export default AddReview;