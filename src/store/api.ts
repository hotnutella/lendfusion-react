import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../pages/users/types';

const MINIMUM_MOCK_ID = 11;

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => 'users',
        }),
        getUserDetails: builder.query<User, number>({
            query: (id) => `users/${id}`,
        }),
        addUser: builder.mutation<User, User>({
            query: (body) => ({
                url: 'users',
                method: 'POST',
                body,
            }),
            onQueryStarted: async (newUserData, { dispatch, queryFulfilled }) => {
                const patchResult = dispatch(
                    api.util.updateQueryData('getUsers', undefined, (draft) => {
                        // jsonplaceholder doesn't create new users on the server
                        // so we have to fake it locally by assigning the next id
                        // otherwise all new users will have id of 11
                        const mockId = Math.max(MINIMUM_MOCK_ID, draft.length + 1);
                        const newUser = { ...newUserData, id: mockId };
                        draft?.push(newUser);
                    })
                );

                try {
                    await queryFulfilled;
                }
                catch {
                    patchResult.undo();
                }
            }
        }),
        updateUser: builder.mutation<any, User>({
            query: ({ id, ...patch }) => ({
                url: `users/${id}`,
                method: 'PUT',
                body: patch,
            }),
            onQueryStarted: async (patch, { dispatch, queryFulfilled }) => {
                const patchResult1 = dispatch(
                    api.util.updateQueryData('getUsers', undefined, (draft) => {
                        const userIndex = draft?.findIndex((user) => user.id === patch.id);
                        if (userIndex !== undefined && userIndex !== -1) {
                            draft?.splice(userIndex, 1, patch);
                        }
                    })
                );

                const patchResult2 = dispatch(
                    api.util.updateQueryData('getUserDetails', patch.id!, (draft) => {
                        Object.assign(draft, patch);
                    })
                );

                try {
                    await queryFulfilled;
                }
                catch {
                    patchResult1.undo();
                    patchResult2.undo();
                }
            }
        }),
        deleteUser: builder.mutation<{}, number>({
            query: (id) => ({
                url: `users/${id}`,
                method: 'DELETE',
            }),
            onQueryStarted: async (id, { dispatch, queryFulfilled }) => {
                const patchResult = dispatch(
                    api.util.updateQueryData('getUsers', undefined, (draft) => {
                        const userIndex = draft?.findIndex((user) => user.id === id);
                        if (userIndex !== undefined && userIndex !== -1) {
                            draft?.splice(userIndex, 1);
                        }
                    })
                );

                try {
                    await queryFulfilled;
                }
                catch {
                    patchResult.undo();
                }
            }
        }),
    }),
})

export const {
    useGetUsersQuery,
    useGetUserDetailsQuery,
    useAddUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
} = api;