import { apiSlice } from "../api/apiSlice";

export const postApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addPost: builder.mutation({
      query: (data) => ({
        url: "posts/create-post",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["posts"],
    }),
    editPost: builder.mutation({
      query: ({ data, id }) => ({
        url: `posts/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["singlePost"],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["posts"],
    }),
    addComment: builder.mutation({
      query: ({ data, id }) => ({
        url: `posts/review/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["singlePost"],
    }),

    singlePost: builder.query({
      query: (id) => `/posts/${id}`,
      providesTags: ["singlePost"],
    }),

    getPosts: builder.query({
      query: () => "/posts",
      providesTags: ["posts"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useAddPostMutation,
  useSinglePostQuery,
  useAddCommentMutation,
  useDeletePostMutation,
  useEditPostMutation,
} = postApi;
