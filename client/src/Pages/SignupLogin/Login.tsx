import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
//import video from '../../assets/Video1/video.mp4'
//import { MdAttachEmail } from "react-icons/md";
//import { BsFillShieldLockFill } from "react-icons/bs";
//import { AiOutlineSwapRight } from "react-icons/ai";

//import '../../App.css'
import '../../Styles/SignupLogin/Login.css'

const Login = () => {
  const [email, setEmail] =useState('')
  const [password, setPassword] =useState('')

  const navigate = useNavigate();

  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/v2/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        postMessage('User has been created');
        setEmail('');
        setPassword('');
        navigate('/bookVisit'); // Navigate to login on successful signup
      } else {
        postMessage('Failed to create user');
      }
    } catch (error) {
      postMessage(`Error: ${error.message}`);
      console.error('Error:', error);
    }
  }; 
  return (
    <main className='main'>
      <div className='loginPage'>
        <div className='form-container'>
          
          <div className='videoDiv'>
              {/*<video src={video} autoPlay muted loop></video>*/}
          
            <div className='textDiv'>
              <h2 className='title'>Login Page</h2>
            </div>
          </div>
  
          <div className="formDiv">
            <h3>Let us know you!</h3>
  
            <form onSubmit={handleSubmit} className='form'>
              <div className="inputDiv">
                <label htmlFor="email">Email</label>
                <div className="input">
                {/*<MdAttachEmail className='icon' />*/}
                <input type='email' id='email' name='email' placeholder='Enter email here'
                  onChange={(event) =>{
                  setEmail(event.target.value)
                }}  required />
  
                </div>
              </div>
              <div className="inputDiv">
                <label htmlFor="password">Password</label>
                <div className="input ">
                {/*<BsFillShieldLockFill className="icon" />*/}
                <input type='password' id='password' name='password' placeholder='Enter password here'
                  onChange={(event) =>{
                  setPassword(event.target.value)
                }}  required />
                </div>
              </div>
  
              <button type='submit' className='btn flex'> 
                <span>Login</span>
                {/*< AiOutlineSwapRight  className='icon'/>*/}
              </button>
              <div className="feeterDiv flex">
              <span className="text">You don't have an account?</span>
              <Link to={'/signup'}>
              <button className='btn'>Sign Up</button>
              </Link>
            </div>
              <a href='/dashboard'>Dashboard</a>
              <span className='forgotPassword'>
                Forgot your password? <a href=''>Click here</a>
              </span>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login;
