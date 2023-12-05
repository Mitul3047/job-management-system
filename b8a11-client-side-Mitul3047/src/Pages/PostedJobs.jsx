
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
// import { Link } from 'react-router-dom';

const PostedJobs = () => {
  const [postedJobs, setPostedJobs] = useState([]);
  const { user } = useContext(AuthContext);
  // const { _id } = postedJobs

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('https://job-management-api.vercel.app/postedjobs/', {withCredentials: true});
            if (response.status !== 200) {
                throw new Error('Network response was not ok');
            }
            const data = response.data;

            // Filter the data where postedJobderEmail is "shehabchowdhury10@gmail.com"
            const filteredpostedJobs = data.filter((postedJob) => postedJob.email === user.email);
            setPostedJobs(filteredpostedJobs);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    fetchData();

}, [user.email]);// Add user.email as a dependency to re-fetch data when it changes

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      allowOutsideClick: false, // Prevent clicking outside the dialog
      showLoaderOnConfirm: true, // Display loading indicator

      preConfirm: () => {
        return fetch(`https://job-management-api.vercel.app/postedjobs/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              const remainingPostedJobs = postedJobs.filter(postedJob => postedJob._id !== id);
              setPostedJobs(remainingPostedJobs);
              return data;
            } else {
              throw new Error('Failed to delete the bid.');
            }
          })
          .catch(error => {
            Swal.showValidationMessage(`Error: ${error.message}`);
          });
      },
    })
      .then((result) => {
        if (result.value) {
          Swal.fire('Deleted!', 'Your bid has been deleted.', 'success');
        }
      });
  };

  return (
    <div className='min-h-screen'>
        <Helmet>
                <title>
                    JobSeeker | My Posted Jobs
                </title>
            </Helmet>
      {/* Render the filtered postedJobs */}
      <h2 className='text-center text-4xl my-10 text-cyan-600'>My Posted Jobs</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[80%] mx-auto' >
        {postedJobs.map((postedJob) => (
          <div key={postedJob._id} className='border p-6 space-y-2 rounded bg-cyan-100  shadow-xl '>
            <p>Job Title: {postedJob.jobTitle}</p>
            <p>Job Category: {postedJob.jobCategory}</p>
            <p>Job Description: {postedJob.description}</p>
            <p>Your Deadline: {postedJob.deadline}</p>
            <p>Your Max-Price: {postedJob.maxPrice}</p>
            <p>Your Min-Price: {postedJob.minPrice}</p>
            <div className='flex items-center justify-between'>
              <Link to={`/update/${postedJob._id}`}>
                <button className="btn btn-secondary">Update</button>
              </Link>
              <button onClick={() => handleDelete(postedJob._id)} className=' font-semibold flex justify-end cursor-pointer  text-red-500'>X</button>

            </div>


          </div>
        ))}
      </div>
    </div>
  );
};

export default PostedJobs;
