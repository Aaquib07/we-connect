import { Link } from 'react-router-dom'
import { IoIosMore } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import { FaRegComment } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import './post.scss'
import Comments from '../comments/Comments';
import { useState } from 'react';

const Post = ({ post }) => {
    const [commentOpen, setCommentOpen] = useState(false)

    const liked = true

    return (
        <div className='post'>
            <div className="container">
                <div className="user">
                    <div className="userinfo">
                        <img src={post.profilePic} alt="" />
                        <div className="details">
                            <Link to={`/profile/${post.userId}`} style={{ textDecoration: "none", color: "inherit" }}>
                                <span className='name'>{post.name}</span>
                            </Link>
                            <span className='date'>1 min ago</span>
                        </div>
                    </div>
                    <IoIosMore />
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={post.img} alt="" />
                </div>
                <div className="info">
                    <div className="item">
                        {liked ? <IoHeartSharp /> : <IoHeartOutline />}
                        12 Likes
                    </div>
                    <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
                        <FaRegComment />
                        12 Comments
                    </div>
                    <div className="item">
                        <IoShareSocialOutline />
                        Share
                    </div>
                </div>
                {commentOpen && <Comments />}
            </div>
        </div>
    )
}

export default Post