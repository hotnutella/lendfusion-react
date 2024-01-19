import React, { useState } from 'react';
import { useDeleteUserMutation, useGetUsersQuery } from '../../store/api';
import UserListItem from './UserListItem';
import { User } from '../../pages/users/types';
import UserDeletePrompt from './UserDeletePrompt';

interface UserListProps {
    onUserSelection: (id: number) => void;
    searchQuery: string;
}

const UserList = ({ onUserSelection, searchQuery }: UserListProps) => {
    const [deletePromptOpen, setDeletePromptOpen] = useState<boolean>(true);
    const [deleteUserId, setDeleteUserId] = useState<number | null>(null);
    const { data: users } = useGetUsersQuery();

    const [deleteUser] = useDeleteUserMutation();

    const handleDelete = (id: number) => {
        setDeletePromptOpen(true);
        setDeleteUserId(id);
    }

    const handleDeleteCancel = () => {
        setDeletePromptOpen(false);
        setDeleteUserId(null);
    }

    const handleDeleteConfirm = () => {
        if (deleteUserId) {
            deleteUser(deleteUserId);
        }
        setDeletePromptOpen(false);
        setDeleteUserId(null);
    }

    const filter = (user: User) => user.name.toLowerCase().includes(searchQuery.toLowerCase());
    const filteredUsers = users?.filter(filter) || [];

    return (
        <>
            {filteredUsers.map((user: User) => (
                <UserListItem
                    key={user.id}
                    name={user.name}
                    onClick={() => onUserSelection(user.id!)}
                    onDelete={() => handleDelete(user.id!)} />
            ))}
            <UserDeletePrompt 
                open={deletePromptOpen}
                onClose={handleDeleteCancel}
                onCancel={handleDeleteCancel}
                onDelete={handleDeleteConfirm} />
        </>
    );
}

export default UserList;