/* eslint-disable @typescript-eslint/no-explicit-any */


import { baseApi } from "../api/baseApi";


export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  phoneNumber?: string;
  profileImage?: string;
  role: string;
  status: string;
  isProfileCompleted: boolean;
  country: string;
  city: string;
  profile?: {
    puppyName: string;
    DOB: string;
    ageGroup: string;
    gender: 'MALE' | 'FEMALE';
    breedType: string;
    trainingReminder: boolean;
    trainingReminderTime?: string;
  };
}



const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUSers: builder.query({
      query: (params) => {
        console.log("Fetching users with params:", params);
        const searchParams = new URLSearchParams();
        searchParams.append('page', params.page.toString());
        searchParams.append('limit', params.limit.toString());
        return {
          url: `/users/all`,
          method: "GET",
          params: searchParams,
        };
      },
    }),
    getSingleUser: builder.query({
      query: (id) => ({
        url: `/users/single/${id}`,
        method: "GET",
      }),
      providesTags: ["user"],
    }),




    blockUnblockUser: builder.mutation({
      query: (data) => {
        return {
          url: `/users/block-unblock-user/${data?.id}`,
          method: "PATCH",
          body: data?.formData,
        };
      },
      invalidatesTags: ["user"],
    }),
  getMe: builder.query<UserProfile, void>({
      query: () => '/auth/get-me',
      transformResponse: (response: any) => response.data,
      providesTags: ['user'],
    }),
    getUserDashboardCounts: builder.query({
      query: () => '/users/user-dashboard-counts',
      transformResponse: (response: any) => response.data,
      providesTags: ['user'],
    }),
    updateUser: builder.mutation<UserProfile, FormData>({
      query: (formData) => ({
        url: '/users/update-user',
        method: 'PATCH',
        body: formData,
      }),
      invalidatesTags: ['user'],
    }),
 
  }),
});

export const {
  useGetAllUSersQuery,
  useGetSingleUserQuery,
  useBlockUnblockUserMutation,
  useGetMeQuery,
  useUpdateUserMutation,
  useGetUserDashboardCountsQuery
} = usersApi;
