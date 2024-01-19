import React from 'react';
import { useGetUserDetailsQuery } from '../../store/api';
import styles from './UserDetails.module.css';
import Button from '../ui/Button';

interface UserDetailsProps {
    id: number;
    onBackClick: () => void;
}

interface Error {
    status: number;
    data: Object;
}

const UserDetails = ({ id, onBackClick }: UserDetailsProps) => {
    const { data: user, error } = useGetUserDetailsQuery(id);

    const isWrongUser = (error as Error)?.status === 404;

    const address = user && `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`;

    return (
        <>
            <Button onClick={() => onBackClick()}>Back to users</Button>
            {isWrongUser && (
                <div className={styles.error}>
                    This user does not exist on the server. <br />
                    It was probably added on the frontend, but not saved in the database.
                </div>
            )}
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
