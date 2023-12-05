
// import  { useState, useEffect } from 'react';
// import axios from 'axios';
// const SearchJob = () => {
//     const [jobs, setJobs] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     // Fetch the API data when the component mounts
//     axios.get('https://job-management-api.vercel.app/postedjobs')
//       .then((response) => {
//         setJobs(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   // Filter the job cards based on the search term
//   const filteredJobs = jobs.filter((job) =>
//     job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//     return (
//         <div>
//         <h1>Job Search</h1>
//         <input
//           type="text"
//           placeholder="Search by job title"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
  
//         <div className="job-cards">
//           {filteredJobs.map((job) => (
//             <div key={job._id} className="job-card">
//               <h2>{job.jobTitle}</h2>
//               <p>{job.description}</p>
//               <p>Category: {job.jobCategory}</p>
//               <p>Deadline: {job.deadline}</p>
//               <p>Price Range: ${job.minPrice} - ${job.maxPrice}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
// };

// export default SearchJob;



const SearchJob = () => {
    return (
        <div>
            
        </div>
    );
};

export default SearchJob;



