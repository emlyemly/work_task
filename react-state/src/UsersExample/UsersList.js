import React from 'react';

const UsersList = ({ users }) => {
    return (
        <div>
            {users.map((user) => {
                return (
                    <h1
                        key={user.id}
                    >{`${user.firstName} ${user.lastName}`}</h1>
                );
            })}
        </div>
    );
};

export default UsersList;
