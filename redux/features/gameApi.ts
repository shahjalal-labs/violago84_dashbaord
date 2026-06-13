/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../api/baseApi";

export interface GameItem {
  id: string;
  heading: string;
  title: string;
  subtitle: string;
  description: string;
  thumbnail?: string;
  createdAt: string;
  updatedAt: string;
}

interface GamesResponse {
  data: GameItem[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export const gameApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getGames: builder.query<GamesResponse, { page: number; limit: number }>({
      query: ({ page, limit }) => `/games?page=${page}&limit=${limit}`,
      transformResponse: (response: any) => response.data,
      providesTags: ["Game"],
    }),
    getGameById: builder.query<GameItem, string>({
      query: (id) => `/games/${id}`,
      transformResponse: (response: any) => response.data,
      providesTags: (_result, _error, id) => [{ type: "Game", id }],
    }),
    createGame: builder.mutation<GameItem, FormData>({
      query: (formData) => ({
        url: "/games",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Game"],
    }),
    updateGame: builder.mutation<GameItem, { id: string; formData: FormData }>({
      query: ({ id, formData }) => ({
        url: `/games/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: "Game", id }],
    }),
    deleteGame: builder.mutation<void, string>({
      query: (id) => ({
        url: `/games/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Game"],
    }),
  }),
});

export const {
  useGetGamesQuery,
  useGetGameByIdQuery,
  useCreateGameMutation,
  useUpdateGameMutation,
  useDeleteGameMutation,
} = gameApi;