import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import Jobs from "../Components/Jobs";
import Motivation from "../Components/Motivation";
// import SearchJob from "../Components/SearchJob";


const Home = () => {
    return (
        <div>
              <Helmet>
                <title>
                    JobSeeker | Home
                </title>
            </Helmet>
            <Banner></Banner>
            <Jobs></Jobs>
            {/* <SearchJob></SearchJob> */}
        <Motivation></Motivation>
        </div>
    );
};

export default Home;