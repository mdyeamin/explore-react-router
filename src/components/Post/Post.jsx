import React from 'react';
import { Link, useNavigate } from 'react-router';
const Post = ({post}) => {
    const navigate = useNavigate();
    const {title,id} = post
    return (
        <div style={
            {
                border: "1px solid red",
                padding : "20px",
                borderRadius: "20px",
                margin: "10px"
            }
        }>
        
            <h2>{title}</h2>
            <Link to={`/posts/${id}`}>
            <button>Show Details</button>
            </Link>
            <button onClick={()=>navigate(`/posts/${id}`)}>Show detail for {id}</button>
        </div>
    );
};

export default Post;