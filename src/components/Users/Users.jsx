import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {
    const users = useLoaderData()
 
    return (
        <div>
            <h3>Users</h3>
            {
                users.map(user=> <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export default Users;