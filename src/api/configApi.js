import axios from 'axios';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { createRequest } from './cryptoApi';


const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': 'c5f42b2460mshbbdbb34e3b23342p1e0632jsn278af6f2f364'

}
const baseUrl = "https://api.coinstats.app/public/v1";

// export const axiosInstance = axios.create({
//     baseURL: baseUrl,
// });
const createRequest = (url) => ({ url, header: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),

        })
    })
})

export const {
    useGetCryptosQuery,
} = cryptoApi;