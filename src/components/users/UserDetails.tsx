import React from 'react';
import { useGetUserDetailsQuery } from '../../store/api';
import styles from './UserDetails.module.css';
import Button from '../ui/Button';

interface UserDetailsProps {
    id: number;
    onBackClick: () => void;
}

const UserDetails = ({ id, onBackClick }: UserDetailsProps) => {
    const { data: user } = useGetUserDetailsQuery(id);

    const address = user && `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;

    return (
        <>
            <Button onClick={() => onBackClick()}>Back to users</Button>
            {user && (
                <div className={styles.detail}>
                    <div>Name: {user.name}</div>
                    <div>Email: {user.email}</div>
                    <div>Phone: {user.phone}</div>
                    <div>Address: {address}</div>
                    <div>Website: {user.website}</div>
                    <div>Company: {user.company.name}</div>
                </div>
            )}
        </>
    );
}

export default UserDetails;
