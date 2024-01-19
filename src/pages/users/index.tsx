import React, { useState } from 'react';
import { useGetUsersQuery } from '../../store/api';
import UserDetails from '../../components/users/UserDetails';
import UserList from '../../components/users/UserList';
import PageHeading from '../../components/ui/PageHeading';
import Button from '../../components/ui/Button';
import Dialog from '../../components/ui/Dialog';
import UserForm from '../../components/users/UserForm';

const UsersPage = () => {
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [dialogOpen, setDialogOpen] = useState<boolean>(true);

    const handleUserSelection = (id: number) => {
        setSelectedUserId(id);
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
                    searchQuery={searchQuery} />
            )}
            <Dialog
                open={dialogOpen}
                title='Add new user'
                onClose={() => setDialogOpen(false)}
            >
                <UserForm onUserAdded={() => setDialogOpen(false)} />
            </Dialog>
        </>
    );
}

export default UsersPage;