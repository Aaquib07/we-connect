import './profile.scss'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { SlOptions } from "react-icons/sl";

const Profile = () => {
  return (
    <div className='profile'>
      <div className="images">
        <img className='cover' src="https://images.pexels.com/photos/17037983/pexels-photo-17037983/free-photo-of-sunbeds-on-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile" />
        <img className='profilePic' src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cover" />
      </div>
      <div className="profileContainer">
        <div className="userinfo">
          <div className="left">
            <span>Jane Doe</span>
            <div className="info">
              <div className="item">
                <CiLocationOn />
                <span>India</span>
              </div>
              <button>Follow</button>
            </div>
          </div>
          <div className="right">
            <MdOutlineEmail />
            <SlOptions />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

