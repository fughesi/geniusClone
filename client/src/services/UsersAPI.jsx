import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5200/api/users",
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getState().auth.token;
    //   if (token) {
    //     headers.set("authorization" || "Authorization", `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    getSingleUser: builder.query({
      query: async (id) => ({
        url: `/${await id}`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    createNewUser: builder.mutation({
      query: (data) => {
        const body = new FormData();

        body.append("image", data?.image);
        body.append("username", data?.username);
        body.append("age", data?.age);
        body.append("firstName", data?.firstName);
        body.append("lastName", data?.lastName);
        body.append("password", data?.password);
        body.append("confirmPassword", data?.confirmPassword);
        body.append("email", data?.email);

        return { url: "/register", method: "POST", body };
      },
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetAllUsersQuery, useCreateNewUserMutation, useGetSingleUserQuery } = usersApi;
