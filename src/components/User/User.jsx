import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const {name,email,phone,id} = user;

    const userStyle = {
        border :"1px solid red ",
        borderRadius : "10px",
        margin: "10px"
    }

    return (
        <div style={userStyle}>
       <h2>{name}</h2>
       <p>email: {email}</p>
       <small>{phone}</small>     
       <Link to={`${id}`}>View Details</Link>
        </div>
    );
};

export default User;