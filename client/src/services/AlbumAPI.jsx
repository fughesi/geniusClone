import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const albumApi = createApi({
  reducerPath: "albumApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5200/api/albums",
  }),
  tagTypes: ["Album"],
  endpoints: (builder) => ({
    getAllAlbums: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["Album"],
    }),
  }),
});

export const { useGetAllAlbumsQuery } = albumApi;
