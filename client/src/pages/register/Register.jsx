import { Link } from 'react-router-dom'
import './register.scss'

const Register = () => {
  return (
    <div className='register'>
        <div className="card">
            <div className="left">
                <h1>WE-CONNECT</h1>
                <p>
                    We-Connect you to the World. Say hello to everyone!
                </p>
                <span>
                    Have an account already? 
                </span>
                <Link to={'/login'}>
                  <button>Login</button>
                </Link>
            </div>
            <div className="right">
                <h1>REGISTER</h1>
                <form action="">
                    <input type="text" placeholder='Full Name' />
                    <input type="text" placeholder='Username' />
                    <input type="email" placeholder='Email ID' />
                    <input type="password" placeholder='Password' />
                    <button>Register</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register