import React from 'react';
import { User } from '../../pages/users/types';
import { useAddUserMutation } from '../../store/api';
import styles from './UserForm.module.css';
import Button from '../ui/Button';

interface UserFormProps {
    onUserAdded: () => void;
}

const UserForm = (props: UserFormProps) => {
    const [addUser] = useAddUserMutation();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget as HTMLFormElement;
        const user: User = {
            name: form.fullname?.value || '',
            username: form.username?.value || '',
            email: form.email?.value || '',
            phone: form.phone?.value || '',
            website: form.website?.value || '',
            address: {
                street: form.street?.value || '',
                suite: form.suite?.value || '',
                city: form.city?.value || '',
                zipcode: form.zipcode?.value || '',
                geo: {
                    lat: '',
                    lng: ''
                }
            },
            company: {
                name: form.company?.value || '',
                catchPhrase: form.catchPhrase?.value || '',
                bs: form.bs?.value || ''
            }
        };

        addUser(user);
        props.onUserAdded();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.grid}>
                <div>
                    <div>
                        <label htmlFor="fullname">Full name</label>
                        <input type="text" name="fullname" id="fullname" data-testid="fullname" />
                    </div>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" data-testid="username" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" data-testid="email" />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name="phone" id="phone"  data-testid="phone" />
                    </div>
                    <div>
                        <label htmlFor="website">Website</label>
                        <input type="text" name="website" id="website" data-testid="website" />
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="street">Street</label>
                        <input type="text" name="street" id="street" data-testid="street" />
                    </div>
                    <div>
                        <label htmlFor="suite">Suite</label>
                        <input type="text" name="suite" id="suite" data-testid="suite" />
                    </div>
                    <div>
                        <label htmlFor="city">City</label>
                        <input type="text" name="city" id="city" data-testid="city" />
                    </div>
                    <div>
                        <label htmlFor="zipcode">Zipcode</label>
                        <input type="text" name="zipcode" id="zipcode" data-testid="zipcode`" />
                    </div>
                    <div>
                        <label htmlFor="company">Company</label>
                        <input type="text" name="company" id="company" data-testid="company" />
                    </div>
                    <div>
                        <label htmlFor="catchPhrase">Catch phrase</label>
                        <input type="text" name="catchPhrase" id="catchPhrase" data-testid="catchPhrase" />
                    </div>
                    <div>
                        <label htmlFor="bs">BS</label>
                        <input type="text" name="bs" id="bs" data-testid="bs" />
                    </div>
                </div>
            </div>
            <Button type="submit">Add user</Button>
        </form>
    );
}

export default UserForm;