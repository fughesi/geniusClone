import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const practiceApi = createApi({
  reducerPath: "practiceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5200/",
  }),
  tagTypes: ["Practice"],
  endpoints: (builder) => ({
    getAllPracticeResults: builder.query({
      query: () => ({
        url: "getPracticeReg",
        method: "GET",
      }),
      providesTags: ["Practice"],
    }),
    postPracticeResults: builder.mutation({
      query: (data) => {
        const body = new FormData();
        body.append("image", data.image);
        body.append("name", data.name);
        body.append("height", data.height);
        body.append("weight", data.weight);
        body.append("eyeColor", data.eyeColor);

        return {
          url: "mockRegister",
          method: "POST",
          body,
        };
      },

      invalidatesTags: ["Practice"],
    }),
  }),
});

export const { useGetAllPracticeResultsQuery, usePostPracticeResultsMutation } = practiceApi;
