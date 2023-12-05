
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const JobDetails = () => {
    const job = useLoaderData()
    console.log({job});
    const { user } = useContext(AuthContext)
    const { _id, email, jobTitle, description, jobCategory, deadline, maxPrice, minPrice } = job
    const isBiddingDisabled = user?.email === email;
    const handleAddBid = e => {
        e.preventDefault()
        const providerEmail = e.target.providerEmail.value;
        const bidderEmail = e.target.bidderEmail.value;
        const bidding = e.target.bidding.value;
        const deadline = e.target.deadline.value;


        // Now you have all the input values, and you can use them as needed.
        console.log("Email: ", providerEmail);
        console.log("Job Title: ", bidderEmail);
        console.log("Description: ", bidding);
        console.log(deadline);


        const bid = {
            providerEmail,
            bidderEmail,
            bidding,
            deadline,
            jobCategory,
            jobTitle,
            status:'pending'


        }
        console.log(bid);


        axios.post('https://job-management-api.vercel.app/bid', bid, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                console.log(response.data);
                if (response.data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Bidding Confirm ',
                    });
                }
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle the error here
            });






    }


    return (
        <div className='min-h-screen flex flex-col justify-center bg-cyan-100 w-full md:w-2/3 mx-auto rounded-lg shadow-xl p-4 lg:p-36'>
              <Helmet>
                <title>
                    JobSeeker | Job
                </title>
            </Helmet>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className='mb-9 col-span-2'>
                    <h3 className='text-2xl font-semibold '>{jobTitle}</h3>
                    <p className='text-sm'>Job Offer Posted by: <span className='underline'>{email}</span></p>
                </div>
                <div className='flex mlg:justify-end lg:items-center'>
                    <p>DeadLine: {deadline}</p>
                </div>
            </div>
            <div className=' mb-9'>
                <p><span className='font-bold'>Job Category:</span> {jobCategory}</p>
                <p><span className='font-bold'>Job Description:</span> {description}</p>
            </div>
            <p className='mb-4'><span className='font-bold'>Bidding Price range:</span> ${maxPrice} - ${minPrice}</p>
            {/* <s className='btn btn-accent text-white'>Submit Your Bidding</s */}
            {/* model */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <div className="dropdown dropdown-top ">
                {
                    isBiddingDisabled ? <button tabIndex={0} className="btn btn-accent text-white m-1 " disabled>Submit Your Bidding</button> 
                    :
                    <label tabIndex={0} className="btn btn-accent text-white m-1">Submit Your Bidding</label>
                }
                <div tabIndex={0} className="dropdown-content z-[1] w-full menu p-2 shadow bg-base-100 rounded-box ">
                    <form action="" onSubmit={handleAddBid} className='space-y-4'>
                        <input
                            type="number"
                            name="bidding"
                            className="input input-accent w-full"
                            placeholder="Enter You Bidding Amount"
                        />
                        <input
                            type="email"
                            name="bidderEmail"
                            defaultValue={user?.email}
                            className="input input-accent w-full"
                            placeholder="Email"
                            readOnly
                        />
                        <div className='flex justify-between items-center'>
                            <label htmlFor="" className='mr-3'>Deadline: </label>
                            <input
                                type="date"
                                name="deadline"
                                className="input input-accent w-full"
                            />
                        </div>
                        <input
                            type="email"
                            name="providerEmail"
                            defaultValue={email}
                            className="input input-accent w-full"
                            placeholder="Email"
                            readOnly
                        />

                        <div className='flex mt-4'>
                            {/* if there is a button in form, it will close the modal */}
                            <button type='submit' className="btn btn-accent  flex-grow text-white">Confirm</button>
                            {/* <button className="btn flex-grow bg-red-600 text-white">Close</button> */}
                        </div>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default JobDetails;