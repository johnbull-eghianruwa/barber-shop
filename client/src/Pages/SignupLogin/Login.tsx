import { Link } from 'react-router-dom'
import video from '../../assets/Video1/video.mp4'
import { MdAttachEmail } from "react-icons/md";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

//import '../../App.css'
import '../../Styles/SignupLogin/Login.css'

const Login = () => {
  
  return (
    <div className='loginPage flex'>
      <div className='container flex'>
        
       <div className='videoDiv'>
           {/*<video src={video} autoPlay muted loop></video>*/}
        
          <div className='textDiv'>
            <h2 className='title'>We make world class hair styles</h2>
          </div>
          <div className="feeterDiv flex">
            <span className="text">You don't have an account?</span>
            <Link to={'/signup'}>
            <button className='btn'>Sing Up</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <h3>Let us know you!</h3>

          <form action=""className='form grid'>
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
              <MdAttachEmail className='icon' />
              <input type='email' id='email' name='email' placeholder='Enter email here' required />

              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
              <BsFillShieldLockFill className="icon" />
              <input type='password' id='password' name='password' placeholder='Enter password here' required />
              </div>
            </div>

            <button type='submit' className='btn flex'> 
              <span>Login</span>
              < AiOutlineSwapRight  className='icon'/>
            </button>
            <a href='/dashboard'>Dashboard</a>
            <span className='forgotPassword'>
              Forgot your password? <a href=''>Click here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
