import { Link } from 'react-router-dom'
import './login.scss'

const Login = () => {
  return (
    <div className='login'>
        <div className="card">
            <div className="left">
                <h1>Hello You</h1>
                <p>
                    Get ready to get connected with the World
                </p>
                <span>
                    Need for an account? 
                </span>
                <Link to={'/register'}>
                    <button>Register</button>
                </Link>
            </div>
            <div className="right">
                <h1>LOG IN</h1>
                <form action="">
                    <input type="text" placeholder='Username' />
                    <input type="password" placeholder='Password' />
                    <button>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login