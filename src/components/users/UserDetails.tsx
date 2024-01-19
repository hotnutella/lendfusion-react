import React from 'react';
import { useGetUserDetailsQuery, useUpdateUserMutation } from '../../store/api';
import styles from './UserDetails.module.css';
import Button from '../ui/Button';
import EditableField from '../ui/EditableField';

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

    const [updateUser] = useUpdateUserMutation();

    const handleAddressChange = (value: string) => {
        const address = value.split(', ');

        const newAddress = {
            street: address[0] || '',
            suite: address[1] || '',
            city: address[2] || '',
            zipcode: address[3] || '',
            geo: {
                lat: '',
                lng: ''
            }
        };

        if (user) {
            const newUser = {
                ...user,
                address: newAddress
            };

            updateUser(newUser);
        }
    }

    const handleCompanyChange = (value: string) => {
        const newCompany = {
            name: value,
            catchPhrase: '',
            bs: ''
        };

        if (user) {
            const newUser = {
                ...user,
                company: newCompany
            };

            updateUser(newUser);
        }
    }

    const handleFieldChange = (field: string, value: string) => {
        switch (field) {
            case 'address':
                handleAddressChange(value);
                break;
            case 'company':
                handleCompanyChange(value);
                break;
            default:
                if (user) {
                    const newUser = {
                        ...user,
                        [field]: value
                    };

                    updateUser(newUser);
                }
        }
    }

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
                    <div>
                        <span>Name:</span>
                        <EditableField
                            name="name"
                            value={user.name}
                            onChange={handleFieldChange} />
                    </div>
                    <div>
                        <span>Email:</span>
                        <EditableField
                            name="email"
                            value={user.email}
                            onChange={handleFieldChange} />
                    </div>
                    <div>
                        <span>Phone:</span>
                        <EditableField
                            name="phone"
                            value={user.phone}
                            onChange={handleFieldChange} />
                    </div>
                    <div>
                        <span>Address:</span>
                        <EditableField
                            name="address"
                            value={address || ''}
                            onChange={handleFieldChange} />
                    </div>
                    <div>
                        <span>Website:</span>
                        <EditableField
                            name="website"
                            value={user.website}
                            onChange={handleFieldChange} />
                    </div>
                    <div>
                        <span>Company:</span>
                        <EditableField
                            name="company"
                            value={user.company.name}
                            onChange={handleFieldChange} />
                    </div>
                </div>
            )}
        </>
    );
}

export default UserDetails;
