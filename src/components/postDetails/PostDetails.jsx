import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const navigate = useNavigate()
    const post = useLoaderData()
    const {id,body,title} =post;
    
    return (
        <div>
            <h3>{`Details for ${id} no. id` }</h3>
            <h2>{title}</h2>
            <button onClick={()=> navigate(-1)}>go back</button>
<p>{body}</p>
        </div>
    );
};

export default PostDetails;