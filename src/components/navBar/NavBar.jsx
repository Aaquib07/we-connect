import { Link } from 'react-router-dom'
import { FaHome, FaUser } from 'react-icons/fa'
import { MdDarkMode } from 'react-icons/md'
import { IoGrid } from 'react-icons/io5'
import { CiSearch } from "react-icons/ci";
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineWbSunny } from "react-icons/md";
import './navBar.scss'
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';

const NavBar = () => {

    const {darkMode, toggleMode} = useContext(DarkModeContext)
    const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
        <div className="left">
            <Link to={'/'} style={{textDecoration: "none"}}>
                <span>We-Connect</span>
            </Link>
            <FaHome />
            {darkMode ? <MdOutlineWbSunny onClick={toggleMode} /> : <MdDarkMode onClick={toggleMode} />}
            <IoGrid />
            <div className="search">
                <CiSearch />
                <input type="text" placeholder='Search' />
            </div>
        </div>
        <div className="right">
            <FaUser />
            <IoMdNotifications />
            <div className="user">
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
            </div>
        </div>
    </div>
  )
}

export default NavBar