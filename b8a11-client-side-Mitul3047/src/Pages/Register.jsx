import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";



const Register = () => {


    const [error, setError] = useState('');
    // const [isCheckboxChecked, setIsCheckboxChecked] = useState(false); // State for checkbox
    const { createUser, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    // const handleRegister = e => {
    //     e.preventDefault();

  

    
        const handleRegister = e => {
            e.preventDefault();
        
            const email = e.target.email.value;
            const password = e.target.password.value;
            const confirmPassword = e.target.confirmPassword.value;
        
            // Validate password
            const passwordValidationResult = validatePassword(password);
            if (passwordValidationResult !== true) {
                Swal.fire(
                    'Oops!',
                    passwordValidationResult,
                    'error'
                );
                return;
            }
        
            if (password !== confirmPassword) {
                Swal.fire(
                    'Oops!',
                    'Password and Confirm Password do not match.',
                    'error'
                );
            }
            // else if (!isCheckboxChecked) {
            //     Swal.fire(
            //         'Oops!',
            //         'Please accept the Terms of Use and Privacy Policy.',
            //         'error'
            //     );
            // } 
           else 
                {
                    createUser(email, password)
                    .then(r => {
                        console.log(r.user);
                        Swal.fire(
                            'Success!',
                            'User registration successful.',
                            'success'
                        );
        
                        // Reset the form fields
                        e.target.email.value = '';
                        e.target.password.value = '';
                        e.target.confirmPassword.value = '';
                        // setIsCheckboxChecked(false);
        
                        logOut()
                            .then(() => {
                                // Log out success
                            })
                            .catch(error => {
                                console.error(error);
                            });
                        navigate(location?.state ? location.state : '/log-in')
                    })
                    .catch(error => {
                        console.error(error);
                        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
                            Swal.fire(
                                'Oops!',
                                'User already exists.',
                                'error'
                            );
                        } else(setError(error.message))
                    });
            }
        }
        
        // const handleCheckboxChange = (e) => {
        //     setIsCheckboxChecked(e.target.checked);
        // }
    
        const validatePassword = (password) => {
            if (password.length < 6) {
                return 'Password must be at least 6 characters.';
            }
    
            if (!/[A-Z]/.test(password)) {
                return 'Password must contain at least one uppercase letter.';
            }
    
            if (!/[a-z]/.test(password)) {
                return 'Password must contain at least one lowercase letter.';
            }
    
            if (!/[!@#$%^&*()_+\-= [\]{};':"\\|,.<>?]/.test(password)) {
                return 'Password must contain at least one special character.';
            }
    
            if (!/\d/.test(password)) {
                return 'Password must contain at least one number.';
            }
    
            return true;
        }

    // const handleRegister = e =>{
    //     e.preventDefault();
    //     console.log(e.currentTarget)
    //     const form = new FormData(e.currentTarget)
    //     console.log(form.get('password')) 
    // }
    return (
        <div>
              <Helmet>
                <title>
                    JobSeeker | Register
                </title>
            </Helmet>
               <div>
         
         <p className=" text-center text-purple-500">{error}</p>
         <div className="w-full lg:w-1/2 my-10 mx-auto py-11 px-12   bg-cyan-100 " >
                         <h2 className="text-2xl text-center mb-4">Register</h2>
                         <p className="mb-4 text-lg text-center">
                             Create your account.
                         </p>
                         <form 
                         onSubmit={handleRegister}
                          className="text-black">
                            
                             <div className="mt-5">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                 <input
                                     type="text"
                                     name="name"
                                     placeholder="Name"
                                     required
                                     className="input rounded input-accent  w-full" />
                             </div>
                             <div className="mt-5">
                             <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                 <input
                                     type="email"
                                     name="email"
                                     placeholder="Email"
                                     required
                                     className="input rounded input-accent w-full" />
                             </div>
                             <div className="mt-5">
                             <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                 <input
                                     type="text"
                                     name="photo"
                                     placeholder="Photo Url"
                                     required
                                     className="input rounded input-accent w-full" />
                             </div>
                             <div className="mt-5">
                             <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                 <input
                                     type="password"
                                     name="password"
                                     placeholder="Password"
                                     required
                                     className="input rounded  input-accent w-full" />
                             </div>
                             <div className="mt-5">
                                 <input
                                     type="password"
                                     name="confirmPassword"
                                     placeholder="Confirm Password"
                                     required
                                     className="input rounded input-accent  w-full" />
                             </div>
                             {/* <div className="mt-5">
                                 <input
                                 onSubmit={handleCheckboxChange}
                                     type="checkbox"
                                     className="border border-gray-400 mr-3"
                                     />
                                 <span>
                                     I accept the <a href="#" className="text-red-500 font-semibold">Terms of Use</a> &  <a href="#" className="text-red-500 font-semibold">Privacy Policy</a>
                                 </span>
                             </div> */}
                             <div className="mt-5">
                                 <button className="w-full btn btn-accent text-white py-3 text-center rounded ">Register Now</button>
                                 <p className="text-center mt-3">Already Have an Account? <Link to="/log-in">
                                     <span className="btn-link font-medium ">Login</span>
                                 </Link>
                                 </p>
                             </div>

                         </form>
                     </div>
     </div>
        </div>
    );
};

export default Register;