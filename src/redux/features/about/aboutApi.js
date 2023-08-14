import { apiSlice } from "../api/apiSlice";

export const aboutApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    editAbout: builder.mutation({
      query: ({ data, id }) => ({
        url: `about/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["about"],
    }),
    getAbout: builder.query({
      query: () => "/about",
      providesTags: ["about"],
    }),
  }),
});

export const { useGetAboutQuery, useEditAboutMutation } = aboutApi;
