import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";



const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const handleRegister1 = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(email, password, accepted)

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one upper case characters')
            return;
        }
        else if (!accepted) {
            setRegisterError('Please accept our terms and conditions')
            return;
        }
        // reset error
        setRegisterError('');
        setSuccess('');




        // create user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log = (result.user);
                setSuccess('user created successfully');

                // update profile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: "https://example.com/jane-q-user/profile.jpg",
                })
                    .then(() => console.log('profile updated'))
                    .catch()

                // send verification email:

                sendEmailVerification(result.user)
                    .then(() => {
                        alert('Please check your email and verify your account')
                    });


            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })



    }


    return (
        <div>

            <div className='mx-auto md:w-1/2'>
                <h2 className=' text-3xl'>Please Register</h2>
                <form onSubmit={handleRegister1} className='mt-8'>
                    <input className=' bg-blue-300 mb-4 py-2 px-4 w-full rounded-lg ' type="text" name="name" id="" placeholder='your name' />
                    <br />
                    <input className=' bg-blue-300 mb-4 py-2 px-4 w-full rounded-lg ' type="email" name="email" id="" placeholder='your email' />
                    <br />
                    <div className="relative gap-3">
                        <input
                            className=' bg-blue-300 mb-4 py-2 px-4 w-full rounded-lg' type={showPassword ? "text" : "password"}
                            name="password"
                            id="" placeholder='your password' />

                        <span className=" absolute top-3 ml-1 right-2" onClick={() => setShowPassword(!showPassword)}>{

                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                        }</span>
                    </div>
                    <br />
                    <input type="checkbox" name="" id="terms" />
                    <label className="ml-2" htmlFor="terms">Accept our <a href="">terms and conditions</a></label>
                    <input className='btn btn-secondary w-full' type="submit" value="Register" />
                </form>
                {
                    registerError && <p className="text-red-400 bg-slate-400"> {registerError} </p>}
                {
                    success && <p className="text-blue-400 bg-green-300">
                        {success}
                    </p>
                }

                <p>Already have an account?<Link to="/login"> Please Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;