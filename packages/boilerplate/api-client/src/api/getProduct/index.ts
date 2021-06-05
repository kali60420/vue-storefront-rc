import { CustomQuery } from '@kali604/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function getProduct(context, params, customQuery?: CustomQuery) {
  return Promise.resolve({
    data: [],
    total: 0
  });
}

