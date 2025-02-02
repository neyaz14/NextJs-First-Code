import React from 'react';
import getAllUsers from '../../../lib/getAllUsers';


const Users =async () => {
    const allUsers =await getAllUsers()
    return (
        <div>
            <h1>All Users</h1>
            {allUsers.length}
        </div>
    );
};

export default Users;
