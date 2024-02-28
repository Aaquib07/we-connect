import { Link } from 'react-router-dom'
import { FaHome, FaUser } from 'react-icons/fa'
import { MdDarkMode } from 'react-icons/md'
import { IoGrid } from 'react-icons/io5'
import { CiSearch } from "react-icons/ci";
import { IoMdNotifications } from "react-icons/io";
import './navBar.scss'

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className="left">
            <Link to={'/'} style={{textDecoration: "none"}}>
                <span>We-Connect</span>
            </Link>
            <FaHome />
            <MdDarkMode />
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
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <span>Aaquib</span>
            </div>
        </div>
    </div>
  )
}

export default NavBar