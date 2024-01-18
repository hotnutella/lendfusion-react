import React from 'react';
import { useGetUserDetailsQuery } from '../../store/api';
import styles from './UserDetails.module.css';

interface UserDetailsProps {
    id: number;
    onBackClick: () => void;
}

const UserDetails = ({ id, onBackClick }: UserDetailsProps) => {
    const { data: user } = useGetUserDetailsQuery(id);

    const address = user && `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;

    return (
        <>
            <a href="#" onClick={() => onBackClick()} className={styles.backlink}>Back to users</a>
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
