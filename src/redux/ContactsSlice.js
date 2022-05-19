import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://627bd7c4a01c46a8532678ad.mockapi.io' }),
    tagTypes: ['contact'], 
    endpoints: (builder) => ({
      getContacts: builder.query({
        query: () => `contacts`,
        providesTags:['contact']
      }),
      addContacts:builder.mutation({
        query:  ({name,number}) => ({
            url: 'contacts',
            method: 'POST',
            body: {
              name:name,
              phone:number,
            },
          }),
          invalidatesTags: ['contact'],
      }),
      deleteContacts:builder.mutation({
        query: id => ({
          url:`contacts/${id}`,
          method:'DELETE',
        }),
        invalidatesTags: ['contact'], 
      }),
    }),
  })
  
  export const { useGetContactsQuery, useAddContactsMutation ,useDeleteContactsMutation} = contactsApi