import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IVacancy } from '../types'

export const vacanyAPI = createApi({
    reducerPath: 'vacaicesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://devkg-api.herokuapp.com/api' }),
    endpoints: (builder) => ({
        fetchAllVacancies: builder.query<IVacancy[], number>({
            query: (itemsPerPage: number = 15, page: number = 1) => ({
                url: '/vacancies',
                params: {
                    page: page,
                    itemsPerPage: itemsPerPage,
                },
            }),
        }),
    }),
})
