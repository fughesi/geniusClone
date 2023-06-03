import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const artistApi = createApi({
  reducerPath: "artistApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5200/api/artists",
  }),
  tagTypes: ["Artists"],
  endpoints: (builder) => ({
    getAllArtists: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["Artists"],
    }),
  }),
});

export const { useGetAllArtistsQuery } = artistApi;
