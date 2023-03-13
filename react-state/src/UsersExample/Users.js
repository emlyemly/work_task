import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UsersList from './UsersList';

const Users = () => {
    const [users, setUsers] = useState({});

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get('https://dummyjson.com/users');
            setUsers(res.data.users);
            console.log(res.data);
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <UsersList users={users} />
        </div>
    );
};

export default Users;
