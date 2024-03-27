import { useContext } from 'react';
import { AuthContext } from '../../context/authContext'
import './comments.scss';

const Comments = () => {

    const {currentUser} = useContext(AuthContext)

    // dummy data
  const comments = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    },
    {
      id: 2,
      name: "Jane Doe",
      userId: 2,
      profilePicture:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];
  return (
    <div className='comments'>
        <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder='Write a comment' />
        <button>Send</button>
        </div>
        {comments.map(comment => (
            <div className='comment'>
                <img src={comment.profilePicture} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className='date'>1 hour ago</span>
            </div>
        ))}
    </div>
  )
}

export default Comments