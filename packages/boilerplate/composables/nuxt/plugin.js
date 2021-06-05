import { integrationPlugin } from '@kali604/core';

const moduleOptions = <%= serialize(options) %>;

export default integrationPlugin(({ integration }) => {
  integration.configure('boilerplate', {
    ...moduleOptions
    // other options
  });
});
