import React, { useState } from 'react';
import { useGetUsersQuery } from '../../store/api';
import UserDetails from '../../components/users/UserDetails';
import UserList from '../../components/users/UserList';
import PageHeading from '../../components/ui/PageHeading';
import Button from '../../components/ui/Button';

const UsersPage = () => {
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleUserSelection = (id: number) => {
        setSelectedUserId(id);
    }

    const addButton = (
        <Button onClick={() => console.log('adding user')}>Add user</Button>
    );

    return (
        <>
            <PageHeading             
                title="Users"
                addButton={addButton}
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
        </>
    );
}

export default UsersPage;