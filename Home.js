import React, {useState }from 'react'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Sign_img from './Sign_img'
import { NavLink } from 'react-router-dom'
import DoctorRegister from './DoctorRegister'
const Home = () => {
    return (
        <div className="container mt-3">
            <section className='d-flex justify-content-between'>
                <div className='left_data mt-3 p-3' style={{width:"100%"}}>
                    <h3 className='text-center col-lg-5' >Sign Up</h3>
                    <Form>

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                            <Form.Control type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                            <Form.Control type="text" placeholder="Enter Phone Number" />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
        
                        <Button variant="primary" className='mb-3 col-lg-6' type="submit">
                            Submit
                        </Button>
                    </Form>
                    <p className='mt-3'>Already Have an Account? <span><NavLink to="/login">Login</NavLink></span></p>
                    <p className='mt-3'>Are you a Doctor? <span><NavLink to="/doctorregister">SignUp</NavLink></span></p>
                </div>
               <Sign_img />
            </section>
        </div>
    )
}

export default Home