import React, { useState } from 'react';
import { useDeleteUserMutation } from '../../store/api';
import UserDetails from '../../components/users/UserDetails/UserDetails';
import UserList from '../../components/users/UserList/UserList';
import PageHeading from '../../components/ui/PageHeading/PageHeading';
import Button from '../../components/ui/Button/Button';
import Dialog from '../../components/ui/Dialog/Dialog';
import UserForm from '../../components/users/UserForm/UserForm';
import UserDeletePrompt from '../../components/users/UserDeletePrompt/UserDeletePrompt';

const UsersPage = () => {
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);
    const [deletePromptOpen, setDeletePromptOpen] = useState<boolean>(false);
    const [deleteUserId, setDeleteUserId] = useState<number | null>(null);
    const [deleteUser] = useDeleteUserMutation();

    const handleUserSelection = (id: number) => {
        setSelectedUserId(id);
    }

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

    const title = selectedUserId ? 'User details' : 'Users';
    const addButton = (
        <Button onClick={() => setDialogOpen(true)}>Add user</Button>
    );

    return (
        <>
            <PageHeading
                title={title}
                addButton={!selectedUserId ? addButton : undefined}
                onSearch={setSearchQuery} />
            {selectedUserId && (
                <UserDetails
                    id={selectedUserId}
                    onBackClick={() => setSelectedUserId(null)} />
            )}
            {!selectedUserId && (
                <UserList
                    onUserSelection={handleUserSelection}
                    onUserDelete={handleDelete}
                    searchQuery={searchQuery} />
            )}
            <Dialog
                open={dialogOpen}
                title='Add new user'
                onClose={() => setDialogOpen(false)}
            >
                <UserForm onUserAdded={() => setDialogOpen(false)} />
            </Dialog>
            <UserDeletePrompt 
                open={deletePromptOpen}
                onClose={handleDeleteCancel}
                onCancel={handleDeleteCancel}
                onDelete={handleDeleteConfirm} />
        </>
    );
}

export default UsersPage;