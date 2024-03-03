import React from 'react'
import './login.css'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const login = () => {
  return (
    
    <div className='lo'>
<Navbar/>
    {/* <div className='ff'> */}
        <form>
          <h1 id='hk'>*Login Here*</h1>
            <label>User Name</label>
            <input type='text'></input>
            <br>
            </br>
            <label>Password</label>
            <input type='password'></input>
            <br>
            </br>
            <button id='btn' >Login</button>
            <br></br>
            <br></br>
            <p1 id='r'>New User?? <Link to="Register">Register here</Link></p1>
        </form>
    {/* </div> */}
    </div>
  )
}

export default login;