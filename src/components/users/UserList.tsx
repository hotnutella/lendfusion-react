import React, { useState } from 'react';
import { useGetUsersQuery } from '../../store/api';
import UserListItem from './UserListItem';
import PageHeading from '../ui/PageHeading';
import { User } from './types';
import UserDetails from './UserDetails';

const UserList = () => {
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const { data: users } = useGetUsersQuery();

    const handleUserSelection = (id: number) => {
        setSelectedUserId(id);
    }

    const heading = selectedUserId ? users.find((user: User) => user.id === selectedUserId).name : 'Users';

    return (
        <>
            <PageHeading>{heading}</PageHeading>
            {selectedUserId && (
                <UserDetails 
                    id={selectedUserId} 
                    onBackClick={() => setSelectedUserId(null)} />
            )}
            {!selectedUserId && users && users.map((user: User) => (
                <UserListItem
                    key={user.id}
                    name={user.name}
                    onClick={() => handleUserSelection(user.id)} />
            ))}
            
        </>
    );
}

export default UserList;