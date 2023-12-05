import axios from 'axios';

import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AllJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Fetch the API data when the component mounts
        axios.get('https://job-management-api.vercel.app/postedjobs')
            .then((response) => {
                setJobs(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    // Filter the job cards based on the search term
    const filteredJobs = jobs.filter((job) =>
        job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <div>


            <div className='w-1/2 mx-auto py-32'>
            <Helmet>
                <title>
                    JobSeeker | All Jobs
                </title>
            </Helmet>
                <input
                    className='input input-accent w-full'
                    type="text"
                    placeholder="Search by job title"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredJobs.map((job) => (
                    <div key={job._id} className="job-card">
                        <div className='border p-6 space-y-2 rounded bg-cyan-100 h-60 flex flex-col'>
                            <h2>Job Title: <span className='font-semibold'>{job.jobTitle}</span></h2>
                            <h2>Deadline: {job.deadline}</h2>
                            <h2>Price range: ${job.maxPrice} - ${job.minPrice}</h2>
                            <h2 className='flex-grow'>Description: {job.description}</h2>
                            <Link to={`/job-details/${job._id}`}>
                                <button className='btn btn-accent text-white w-full '>Bid Now</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default AllJobs;