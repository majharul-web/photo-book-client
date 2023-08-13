import { apiSlice } from "../api/apiSlice";
import { getUser } from "./authSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/user",
        body: data,
      }),
      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        // `onStart` side-effect
        try {
          const res = await queryFulfilled;
          // `onSuccess` side-effect
          if (res.status) {
            dispatch(getUser(res.email));
          }
        } catch (err) {
          // `onError` side-effect
        }
      },
    }),

    signup: builder.mutation({
      query: (data) => ({
        url: "auth/signup",
        method: "POST",
        body: data,
      }),
    }),

    login: builder.mutation({
      query: (data) => ({
        url: "auth/signin",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useSignupMutation } = authApi;
