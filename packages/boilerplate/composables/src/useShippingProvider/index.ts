import { useShippingProviderFactory, UseShippingProviderParams, Context } from '@kali604/core';
import { Shipping, ShippingMethod } from '../types';

let provider = {};

const params: UseShippingProviderParams<Shipping, ShippingMethod> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context, { customQuery }) => {
    console.log('Mocked: loadShippingProvider');

    return provider;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  save: async (context: Context, { shippingMethod, customQuery }) => {
    console.log('Mocked: saveShippingProvider');
    provider = shippingMethod;
    return provider;
  }
};

export default useShippingProviderFactory<Shipping, ShippingMethod>(params);
