import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const practiceApi = createApi({
  reducerPath: "practiceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5200/getPracticeReg",
  }),
  endpoints: (builder) => ({
    getAllPracticeResults: builder.query({
      query: () => ({
        url: "/",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllPracticeResultsQuery } = practiceApi;
