import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const practiceApi = createApi({
  reducerPath: "practiceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5200/",
    headers: { ContentType: "multipart / form - data" },
  }),
  endpoints: (builder) => ({
    getAllPracticeResults: builder.query({
      query: () => ({
        url: "getPracticeReg",
        method: "GET",
      }),
      providesTags: ["Practice"],
    }),
    postPracticeResults: builder.mutation({
      query: (body) => ({
        url: "mockRegister",
        method: "POST",
        enctype: "multipart/form-data",
        formData: true,
        body,
      }),
      invalidatesTags: ["Practice"],
    }),
  }),
});

export const { useGetAllPracticeResultsQuery, usePostPracticeResultsMutation } = practiceApi;
