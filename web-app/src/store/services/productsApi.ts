import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../../models/product.ts';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://untraced-fuels.000webhostapp.com/index.php',
  }),
  tagTypes: ['products'],
  endpoints: (build) => ({
    getAllProducts: build.query<Product[], any>({
      query: () => '/products',
      transformResponse: (res:{status: number, message: string, data:Product[]}) => res.data,
      providesTags: ['products'],
    }),
    saveProduct: build.mutation<any, any>({
      query: (params) => ({
        url: '/products',
        params,
        method: 'POST',
      }),
      invalidatesTags: ['products'],
    }),
    deleteProducts: build.mutation<any, { sku: string[]}>({
      query: ({ sku }) => {
        const queryParam = sku.map((str) => `sku[]=${str}`).join('&');
        return ({
          url: `/delete?${queryParam}`,
          method: 'POST',
        });
      },
      invalidatesTags: ['products'],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useDeleteProductsMutation,
  useSaveProductMutation,
} = productsApi;
