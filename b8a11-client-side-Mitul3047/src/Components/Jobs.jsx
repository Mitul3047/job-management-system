import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from 'react-icons/ai';
const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [webDevelopmentJobs, setWebDevelopmentJobs] = useState([]);
  const [digitalMarketingJobs, setDigitalMarketingJobs] = useState([]);
  const [graphicDesignJobs, setGraphicDesignJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://job-management-api.vercel.app/postedjobs/');
        if (response.ok) {
          const data = await response.json();

          const webDevelopmentJobsData = data.filter(job => job.jobCategory === "WebDevelopment");
          const digitalMarketingJobsData = data.filter(job => job.jobCategory === "digitalMarketing");
          const graphicDesignJobsData = data.filter(job => job.jobCategory === "graphicDesign");

          setJobs(data);
          setWebDevelopmentJobs(webDevelopmentJobsData);
          setDigitalMarketingJobs(digitalMarketingJobsData);
          setGraphicDesignJobs(graphicDesignJobsData);
        } else {
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className='lg:p-28'>
      <Tabs>
        <TabList>
          <Tab>Web development</Tab>
          <Tab>Digital marketing</Tab>
          <Tab>Graphics design</Tab>
        </TabList>

        <div className='w-[90%] p-4 mx-auto min-h-screen'>
          <TabPanel>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {webDevelopmentJobs.map(job => (
                <motion.div
                  key={job._id}
                  className="container"
                  whileHover={{ scale: 1.2  }}
                >
                  <div className='border p-6 space-y-2 rounded bg-cyan-100 h-60 flex flex-col'>
                    <h2>Job Title: <span className='font-semibold'>{job.jobTitle}</span></h2>
                    <h2>Deadline: {job.deadline}</h2>
                    <h2>Price range: ${job.maxPrice} - ${job.minPrice}</h2>
                    <h2 className='flex-grow'>Description: {job.description}</h2>
                    <Link to={`/job-details/${job._id}`}>
                      <button className='btn btn-accent text-white w-full '>Bid Now</button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {digitalMarketingJobs.map(job => (
                <motion.div
                  key={job._id}
                  className="container"
                  whileHover={{ scale: 1.2}}
                >
                  <div className='border p-6 space-y-2 rounded bg-cyan-100 h-60 flex flex-col'>
                    <h2>Job Title: <span className='font-semibold'>{job.jobTitle}</span></h2>
                    <h2>Deadline: {job.deadline}</h2>
                    <h2>Price range: ${job.maxPrice} - ${job.minPrice}</h2>
                    <h2 className='flex-grow'>Description: {job.description}</h2>
                    <Link to={`/job-details/${job._id}`}>
                      <button className='btn btn-accent text-white w-full '>Bid Now</button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {graphicDesignJobs.map(job => (
                <motion.div
                  key={job._id}
                  className="container"
                  whileHover={{ scale: 1.2}}
                >
                  <div className='border p-6 space-y-2 rounded bg-cyan-100 h-60 flex flex-col'>
                    <h2>Job Title: <span className='font-semibold'>{job.jobTitle}</span></h2>
                    <h2>Deadline: {job.deadline}</h2>
                    <h2>Price range: ${job.maxPrice} - ${job.minPrice}</h2>
                    <h2 className='flex-grow'>Description: {job.description}</h2>
                    <Link to={`/job-details/${job._id}`}>
                      <button className='btn btn-accent text-white w-full '>Bid Now</button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabPanel>

        </div>
      </Tabs>

      <div className='flex justify-end mb-10 '>
      <Link to={"/all-jobs"}>
      <div className='flex justify-between items-center gap-2 cursor-pointer text-cyan-600 p-2 hover:outline rounded-lg   hover:outline-1'>
          <span className='btn-link text-cyan-600 '>ALL JOBS</span><AiOutlineArrowRight/>
        </div>
      </Link>
      </div>
  
        <img  className='min-h-screen max-w-6 rounded-lg' src="https://i.ibb.co/31N0KWJ/ESL-Conversational-and-Vocabulary-Building-Educational-Presentation-in-Blue-and-Orange-Realistic-Sty.png" alt="" />
   
    </div>
  );
};

export default Jobs;
