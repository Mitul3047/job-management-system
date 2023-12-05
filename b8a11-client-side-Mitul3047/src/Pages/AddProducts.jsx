import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AddProducts = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const handleAddJob = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const jobTitle = e.target.jobTitle.value;
        const description = e.target.description.value;
        const jobCategory = e.target.jobCategory.value;
        const deadline = e.target.deadline.value;
        const maxPrice = e.target.maxPrice.value;
        const minPrice = e.target.minPrice.value;

        // Now you have all the input values, and you can use them as needed.
        console.log("Email: ", email);
        console.log("Job Title: ", jobTitle);
        console.log("Description: ", description);
        console.log("Job Category: ", jobCategory);
        console.log("Deadline: ", deadline);
        console.log("Max Price: ", maxPrice);
        console.log("Min Price: ", minPrice);

        const postedjobs = {
            email,
            jobTitle,
            description,
            jobCategory,
            deadline,
            maxPrice,
            minPrice
        }
        console.log(postedjobs);

        axios.post('https://job-management-api.vercel.app/postedjobs', postedjobs, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                console.log(response.data);
                if (response.data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Job has been posted',
                    });
                }
                navigate("/posted-jobs");

            })
            .catch(error => {
                console.error('Error:', error);
                // Handle the error here
            });






    }

    return (
        <div className="md:w-1/2 w-full p-4 mx-auto">

            <Helmet>
                <title>
                    JobSeeker | Add Product
                </title>
            </Helmet>
            <h2 className="text-center text-3xl">Add Your Job Here</h2>
            <form className="space-y-5" onSubmit={handleAddJob}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        defaultValue={user?.email}
                        className="input input-accent w-full"
                        placeholder="Email"
                        readOnly
                    />
                </div>
                <div>
                    <label htmlFor="jobTitle">Job Title</label>
                    <input
                        type="text"
                        name="jobTitle"
                        className="input input-accent w-full"
                        placeholder="Job Title"
                    />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        name="description"
                        className="input input-accent w-full"
                        placeholder="Description"
                    />
                </div>
                <div>
                    <label htmlFor="jobCategory">Job Category</label>
                    <select name="jobCategory" id="jobCategory" className="input input-accent w-full">
                        <option value="WebDevelopment">Web Development</option>
                        <option value="graphicDesign">Graphic Design</option>
                        <option value="digitalMarketing">Digital Marketing</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="deadline">Deadline</label>
                    <input
                        type="date"
                        name="deadline"
                        className="input input-accent w-full"
                        placeholder="Deadline"
                    />
                </div>
                <div>
                    <label htmlFor="maxPrice">Max Price</label>
                    <input
                        type="text"
                        name="maxPrice"
                        className="input input-accent w-full"
                    />
                </div>
                <div>
                    <label htmlFor="minPrice">Min Price</label>
                    <input
                        type="text"
                        name="minPrice"
                        className="input input-accent w-full"
                    />
                </div>
                <input type="submit" value="Submit" className="btn btn-accent w-full text-white" />
            </form>
        </div>
    );
};

export default AddProducts;
