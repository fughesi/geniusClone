import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5200/api/news",
  }),
  tagTypes: ["Post", "News"],
  endpoints: (builder) => ({
    getAllNewsArticles: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["News"],
    }),
  }),
});

export const { useGetAllNewsArticlesQuery } = newsApi;
