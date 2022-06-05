import { createSlice } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const contactsApi = createApi({
    reducerPath: 'contacts',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().token.value;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    } }),
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
              number:number,
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
  
  export const { useGetContactsQuery, useAddContactsMutation ,useDeleteContactsMutation} = contactsApi;



export const authApi = createApi({
  reducerPath:'auth',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().token.value;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  }
}),
 
  tagTypes:['auth'],
endpoints: (builder) => ({
      getAuth: builder.query({
        query: () => `/users/current`,
        providesTags:['auth']
      }),
      addUser:builder.mutation({
                query:  ({name,email,password}) => ({
                    url: '/users/signup',
                    method: 'POST',
                    body: {
                      name:name,
                      email:email,
                      password:password,
                    },
                  }),
                  invalidatesTags: ['auth'],
              }),
              loginUser:builder.mutation({
                query:  ({email,password}) => ({
                    url: '/users/login',
                    method: 'POST',
                    body: {
                      email:email,
                      password:password,
                    
                    },
                  }),
                  invalidatesTags: ['auth'],
              }),
              logoutUser: builder.mutation({
                query: () => ({
                  url: '/users/logout',
                  method: 'POST',
                }),
                invalidatesTags: ['auth'],
              }),
})
})
export const { useGetAuthQuery,useAddUserMutation,useLoginUserMutation,useLogoutUserMutation } = authApi;


export const tokenSlice = createSlice({
  name:'token',
  initialState:{value:''},
  reducers:{
    setToken(state,action){
      state.value = action.payload
    }
  },
})


export const userSlice = createSlice({
  name:'user',
  initialState:{user:'',filter:''},
  reducers:{
    setUser(state,action){
      state.user = action.payload
    },
    setFilter(state,action){
      state.filter = action.payload
    }
  }
})
export const {setToken} = tokenSlice.actions
export const {setUser, setFilter} = userSlice.actions