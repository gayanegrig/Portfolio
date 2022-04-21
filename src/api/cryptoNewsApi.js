import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
const cryptoNewsHeaders = {
    headers: {
        'X-RapidAPI-Host': 'google-news1.p.rapidapi.com',
        'X-RapidAPI-Key': 'c5f42b2460mshbbdbb34e3b23342p1e0632jsn278af6f2f364'
    }
}
const baseUrl = "https://api.coinstats.app/public/v1";
const createRequest = (url) => ({ url, header: cryptoNewsHeaders })

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ categoryNews, count }) => createRequest(`/news?skip=0&limit=${count}&toDate=1555508420000&fromDate=1555508420000`),

        })
    })
})