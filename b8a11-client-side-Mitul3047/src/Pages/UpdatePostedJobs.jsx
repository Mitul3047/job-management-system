import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const UpdatePostedJobs = () => {
  const { user } = useContext(AuthContext);
  const postedJob = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const jobTitle = e.target.jobTitle.value;
    const description = e.target.description.value;
    const jobCategory = e.target.jobCategory.value;
    const deadline = e.target.deadline.value;
    const maxPrice = e.target.maxPrice.value;
    const minPrice = e.target.minPrice.value;

    const updatedPostedJob = {
      email,
      jobTitle,
      description,
      jobCategory,
      deadline,
      maxPrice,
      minPrice,
    };

    axios
      .put(`https://job-management-api.vercel.app/postedjobs/${postedJob._id}`, updatedPostedJob, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Job has been updated",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle the error here
      });
  };

  return (
    <div className="md:w-1/2 w-full p-4 mx-auto">
        <Helmet>
                <title>
                    JobSeeker | Update Product
                </title>
            </Helmet>
      <h2 className="text-center text-3xl">Update Your Job Here</h2>
      <form className="space-y-5" onSubmit={handleUpdate}>
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
            defaultValue={postedJob.jobTitle}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            className="input input-accent w-full"
            placeholder="Description"
            defaultValue={postedJob.description}
          />
        </div>
        <div>
          <label htmlFor="jobCategory">Job Category</label>
          <select
            name="jobCategory"
            id="jobCategory"
            defaultValue={postedJob.jobCategory}
            className="input input-accent w-full"
          >
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
            defaultValue={postedJob.deadline}
          />
        </div>
        <div>
          <label htmlFor="maxPrice">Max Price</label>
          <input
            type="text"
            name="maxPrice"
            className="input input-accent w-full"
            defaultValue={postedJob.maxPrice}
          />
        </div>
        <div>
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="text"
            name="minPrice"
            className="input input-accent w-full"
            defaultValue={postedJob.minPrice}
          />
        </div>
        <input type="submit" value="Submit" className="btn btn-accent w-full text-white" />
      </form>
    </div>
  );
};

export default UpdatePostedJobs;
