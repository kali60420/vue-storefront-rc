import {
  Context,
  useProductFactory,
  ProductsSearchParams,
  UseProductFactoryParams
} from '@kali604/core';
import { ProductsResponse } from '../types';

const params: UseProductFactoryParams<ProductsResponse, any> = {
  productsSearch: async (context: Context, params: ProductsSearchParams): Promise<ProductsResponse> => {
    console.log('Mocked: productsSearch');
    const { customQuery, ...searchParams } = params;

    return await context.$boilerplate.api.getProduct(searchParams, customQuery);
  }
};

export default useProductFactory<ProductsResponse, any>(params);
