import { Link } from 'react-router-dom'
import './login.scss'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'

const Login = () => {

    const {login} = useContext(AuthContext)

    const handleLogin = () => {
        login()
    }

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
                    <button onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login