import React from 'react';
import { useGetUsersQuery } from '../../../store/api';
import UserListItem from '../UserListItem/UserListItem';
import { User } from '../../../pages/users/types';

interface UserListProps {
    onUserSelection: (id: number) => void;
    onUserDelete: (id: number) => void;
    searchQuery: string;
}

const UserList = ({ onUserSelection, onUserDelete, searchQuery }: UserListProps) => {
    const { data: users } = useGetUsersQuery();

    const filter = (user: User) => user.name.toLowerCase().includes(searchQuery.toLowerCase());
    const filteredUsers = users?.filter(filter) || [];

    return (
        <>
            {filteredUsers.map((user: User) => (
                <UserListItem
                    key={user.id}
                    name={user.name}
                    onClick={() => onUserSelection(user.id!)}
                    onDelete={() => onUserDelete(user.id!)} />
            ))}
        </>
    );
}

export default UserList;