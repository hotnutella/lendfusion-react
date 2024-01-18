import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getUsers: builder.query<any, void>({
            query: () => 'users',
        }),
        getUserDetails: builder.query<any, number>({
            query: (id) => `users/${id}`,
        }),
    }),
})

export const { 
    useGetUsersQuery,
    useGetUserDetailsQuery,
} = api;