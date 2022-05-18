import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://627bd7c4a01c46a8532678ad.mockapi.io' }),
    tagTypes: ['contact'], 
    endpoints: (builder) => ({
      getContacts: builder.query({
        query: () => `/contacts`,
        providesTags:['contact']
      }),
      addContacts:builder.mutation({
          
        query: (values )=> ({
            url: 'contacts',
            method: 'POST',
            body: values,
          }),
          invalidatesTags: ['contact'],
      })
    }),
  })
  
  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints
  export const { useGetContactsQuery, useAddContactsMutation } = contactsApi