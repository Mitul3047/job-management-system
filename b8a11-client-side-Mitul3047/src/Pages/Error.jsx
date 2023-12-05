import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="flex w-1/2 mx-auto justify-center min-h-screen items-center gap-6">

            <img className="w-80" src="https://i.ibb.co/NNSDvpK/404-Brain-Not-Found-T-Shirt.png" alt="" />
            <div>

                <Link to={'/'}>
                    <button className="btn btn-warning">Go to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Error;