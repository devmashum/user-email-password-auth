import React from 'react';

const Register = () => {


    return (
        <div>

            <div className='mx-auto md:w-1/2'>
                <h2 className=' text-3xl'>Please Register</h2>
                <form className='mt-8'>
                    <input className=' bg-blue-300 mb-4 py-2 px-4 w-full rounded-lg ' type="email" name="email" id="" placeholder='your email' />
                    <br />
                    <input className=' bg-blue-300 mb-4 py-2 px-4 w-full rounded-lg' type="password" name="password" id="" placeholder='your password' />
                    <br />
                    <input className='btn btn-secondary w-full' type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
};

export default Register;