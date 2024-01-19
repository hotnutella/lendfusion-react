import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../pages/users/types';

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
        addUser: builder.mutation<any, any>({
            query: (body) => ({
                url: 'users',
                method: 'POST',
                body,
            }),
        }),
        updateUser: builder.mutation<any, any>({
            query: ({ id, ...patch }) => ({
                url: `users/${id}`,
                method: 'PUT',
                body: patch,
            }),
        }),
        deleteUser: builder.mutation<any, number>({
            query: (id) => ({
                url: `users/${id}`,
                method: 'DELETE',
            }),
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