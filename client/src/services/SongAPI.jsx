import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const songsApi = createApi({
  reducerPath: "songsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5200/api/songs",
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getState().auth.token;
    //   if (token) {
    //     headers.set("authorization" || "Authorization", `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  tagTypes: ["Songs", "Post"],
  endpoints: (builder) => ({
    getAllSongs: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["Songs"],
    }),
  }),
});

export const { useGetAllSongsQuery } = songsApi;
