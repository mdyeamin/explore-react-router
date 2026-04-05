import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData()
    const {name,website} = user;

    
    return (
        <div>
            <h2>User Details show here</h2>
            <h2>name:{name}</h2>
            <h4>website: {website}</h4>
        </div>
    );
};

export default UserDetails;