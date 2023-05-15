import React, { useState } from 'react';
import './style.css'
import { Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'



const SignUp = () => {

    const [userValue, setUserValue] = useState({ username: "", email: "", password: "" });

    const [isPasswordShow, setIsPasswordShow] = useState(false);

    const handleSubmit = () => {
        console.log(userValue)
    }

    return (
        <>
            <div className="Auth">
                <div className="inner-auth shadow">
                    <div className="p-4">
                        <h2 className=''>Sign Up</h2>

                        <div className="auth-input my-4">
                            <input type="text" placeholder='Username' value={userValue.username} onChange={(e) => setUserValue({ ...userValue, username: e.target.value })} className='form-control' />
                        </div>

                        <div className="auth-input my-4">
                            <input type="email" placeholder='Your E-mail' value={userValue.email} onChange={(e) => setUserValue({ ...userValue, email: e.target.value })} className='form-control' />
                        </div>
                        <div className="auth-input mb-4">
                            <input type={isPasswordShow ? "text" : "password"} placeholder='At least 4 characters' value={userValue.password} onChange={(e) => setUserValue({ ...userValue, password: e.target.value })} className='form-control' />
                            <div className="eye-icon" onClick={() => setIsPasswordShow(!isPasswordShow)}> {!isPasswordShow ? <AiFillEye /> : <AiFillEyeInvisible />}</div>
                        </div>

                        <div className="mb-4">
                            <button type='button' className='btn btnPrimary w-100' onClick={handleSubmit}>Sign Up</button>
                        </div>
                    </div>

                    <div className="auth-foot">
                        <p className='mb-0'>Already have an account? </p> <Link to="/login"> Login</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp
