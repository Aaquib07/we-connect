import './leftBar.scss'
import Groups from '../../assets/group.png'
import Market from '../../assets/marketplace.png'
import Memories from '../../assets/memories.png'
import Events from '../../assets/events.png'
import Gaming from '../../assets/gaming.png'
import Gallery from '../../assets/gallery.png'
import Videos from '../../assets/video.png'
import Messages from '../../assets/messages.png'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'

const LeftBar = () => {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Shortcuts</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar