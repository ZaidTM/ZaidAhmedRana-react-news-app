import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

const Forgot = () => {


    const [userValue, setUserValue] = useState({ email: "" });


    const handleSubmit = () => {
        console.log(userValue)
    }

    return (
        <>
            <div className="Auth">
                <div className="inner-auth shadow">
                    <div className="p-4">
                        <h2 className=''>Forgot Password?</h2>

                        <p className="small text-secondary">Enter your email address to request a password
                            reset. <br />  You will receive an email with further instructions.</p>

                        <div className="auth-input my-4">
                            <input type="email" placeholder='Your E-mail' value={userValue.email} onChange={(e) => setUserValue({ ...userValue, email: e.target.value })} className='form-control' />
                        </div>

                        <div className="mb-4">
                            <button type='button' className='btn btnPrimary w-100' onClick={handleSubmit}>Request</button>
                        </div>
                    </div>

                    <div className="auth-foot">
                        <p className='mb-0'>Don't have an account? </p> <Link to="/signup"> Sign Up</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forgot
