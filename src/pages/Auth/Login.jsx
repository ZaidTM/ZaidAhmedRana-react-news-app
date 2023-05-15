import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import http from '../../api'
import { environment } from '../../constants'

const Login = () => {


    const [userValue, setUserValue] = useState({ email: "", password: "" });

    const [isPasswordShow, setIsPasswordShow] = useState(false);

    const handleSubmit = () => {

        const formData = new FormData();
        formData.append("email", userValue.email);
        formData.append("password", userValue.password);

        http.post('/login', { body: formData }).then((res) => {
            console.log(res)
        }).catch((e) => {
            console.log(e)
        })

    }



    return (
        <>
            <div className="Auth">
                <div className="inner-auth shadow">
                    <div className="p-4">
                        <h2 className=''>Login</h2>

                        <div className="auth-input my-4">
                            <input type="email" placeholder='Login' value={userValue.email} onChange={(e) => setUserValue({ ...userValue, email: e.target.value })} className='form-control' />
                        </div>
                        <div className="auth-input mb-4">
                            <input type={isPasswordShow ? "text" : "password"} placeholder='Password' value={userValue.password} onChange={(e) => setUserValue({ ...userValue, password: e.target.value })} className='form-control' />
                            <div className="eye-icon" onClick={() => setIsPasswordShow(!isPasswordShow)}> {!isPasswordShow ? <AiFillEye /> : <AiFillEyeInvisible />}</div>
                        </div>

                        <div className="mb-4">
                            <button type='button' className='btn btnPrimary w-100' onClick={handleSubmit}>Login</button>
                        </div>

                        {false &&
                            <div div className="text-center">
                                <Link to="/forgot"> Forgot Password</Link>
                            </div>
                        }
                    </div>

                    <div className="auth-foot">
                        <p className='mb-0'>Don't have an account? </p> <Link to="/signup"> Sign Up</Link>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Login
