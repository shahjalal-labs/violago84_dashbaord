/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../api/baseApi";

export interface IFaq {
  id: string;
  question: string;
  answer: string;
  createdAt: string;
  updatedAt: string;
}

export interface IFaqsResponse {
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  data: IFaq[];
}

export const faqApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFaqs: builder.query<IFaqsResponse, { searchTerm?: string; page?: number; limit?: number }>({
      query: (params) => {
        const searchParams = new URLSearchParams();
        if (params.searchTerm) searchParams.append("searchTerm", params.searchTerm);
        if (params.page !== undefined) searchParams.append("page", params.page.toString());
        if (params.limit !== undefined) searchParams.append("limit", params.limit.toString());
        return {
          url: "/faqs",
          method: "GET",
          params: searchParams,
        };
      },
      transformResponse: (response: any) => response.data,
      providesTags: ["Faq"],
    }),
    getFaqById: builder.query<IFaq, string>({
      query: (id) => ({
        url: `/faqs/${id}`,
        method: "GET",
      }),
      transformResponse: (response: any) => response.data,
      providesTags: ["Faq"],
    }),
    createFaq: builder.mutation<IFaq, { question: string; answer: string }>({
      query: (body) => ({
        url: "/faqs",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Faq"],
    }),
    updateFaq: builder.mutation<IFaq, { id: string; question?: string; answer?: string }>({
      query: ({ id, ...body }) => ({
        url: `/faqs/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Faq"],
    }),
    deleteFaq: builder.mutation<void, string>({
      query: (id) => ({
        url: `/faqs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Faq"],
    }),
  }),
});

export const {
  useGetAllFaqsQuery,
  useGetFaqByIdQuery,
  useCreateFaqMutation,
  useUpdateFaqMutation,
  useDeleteFaqMutation,
} = faqApi;
