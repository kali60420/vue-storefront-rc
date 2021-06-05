import { registerLogger } from '@kali604/core'

const loggerPlugin = (app) => {
  const { verbosity, customLogger, ...args } = <%= serialize(options) %>;
  registerLogger(customLogger || args, verbosity || 'error')
};

export default loggerPlugin;
