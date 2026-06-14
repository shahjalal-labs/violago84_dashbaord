import { baseApi } from "../../api/baseApi";
import { UserProfile } from "../usersApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: userInfo,
        };
      },
      invalidatesTags: ["user"],
    }),
   changePassword: builder.mutation<UserProfile, { oldPassword: string; newPassword: string }>({
  query: (data) => ({
    url: '/auth/change-password',
    method: 'PUT',
    body: data,
  }),
  invalidatesTags: ['user'],
}),
    forgotPassword: builder.mutation({
      query: (userInfo) => {
        console.log({ userInfo });
        return {
          url: "/auth/forget-password",
          method: "POST",
          body: userInfo,
        };
      },
      invalidatesTags: ["user"],
    }),
    resetPassword: builder.mutation({
      query: (userInfo) => {
        console.log({ userInfo });
        return {
          url: "/auth/reset-password",
          method: "POST",
          body: userInfo,
        };
      },
      invalidatesTags: ["user"],
    }),
    // updateUser: builder.mutation({
    //   query: (userInfo) => {
    //     return {
    //       url: "user/me",
    //       method: "PATCH",
    //       body: userInfo,
    //     };
    //   },
    //   invalidatesTags: ["user"],
    // }),
    // register: builder.mutation({
    //   query: (userInfo) => {
    //     return {
    //       url: "register",
    //       method: "POST",
    //       body: userInfo,
    //     };
    //   },
    // }),
    otp: builder.mutation({
      query: (userInfo) => {
        return {
          url: "/auth/verify-otp",
          method: "POST",
          body: userInfo,
        };
      },
    }),
 
    // /auth/resend-otp
    resendOtp: builder.mutation({
      query: (userInfo) => {
        return {
          url: "/auth/resend-otp",
          method: "POST",
          body: userInfo,
        };
      },
    }),
  }),
}); 
 
export const {
  useLoginMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useOtpMutation,
  useResendOtpMutation,
  useChangePasswordMutation
} = authApi;
