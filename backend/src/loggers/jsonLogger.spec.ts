import { JsonLogger } from './jsonLogger';

describe('test JsonLogger', () => {
  let logger: JsonLogger;

  beforeEach(() => {
    logger = new JsonLogger();
  });

  it('.log() should be log correct format', () => {
    const mockMessage = {
      level: 'log',
      message: 'test message',
      optionalParams: [{ test1: 'text', test2: 1 }],
    };
    jest
      .spyOn(logger, 'log')
      .mockImplementation((message, optionalParams) =>
        logger.formatMessage('log', message, optionalParams),
      );
    expect(logger.log('test message', { test1: 'text', test2: 1 })).toEqual(
      JSON.stringify(mockMessage),
    );
  });

  it('.error() should be error correct format', () => {
    const mockMessage = {
      level: 'error',
      message: 'test message',
      optionalParams: [{ test1: 'text', test2: 1 }],
    };
    jest
      .spyOn(logger, 'error')
      .mockImplementation((message, optionalParams) =>
        logger.formatMessage('error', message, optionalParams),
      );
    expect(logger.error('test message', { test1: 'text', test2: 1 })).toEqual(
      JSON.stringify(mockMessage),
    );
  });

  it('.warn() should be warn correct format', () => {
    const mockMessage = {
      level: 'warn',
      message: 'test message',
      optionalParams: [{ test1: 'text', test2: 1 }],
    };
    jest
      .spyOn(logger, 'warn')
      .mockImplementation((message, optionalParams) =>
        logger.formatMessage('warn', message, optionalParams),
      );
    expect(logger.warn('test message', { test1: 'text', test2: 1 })).toEqual(
      JSON.stringify(mockMessage),
    );
  });

  it('.debug() should be debug correct format', () => {
    const mockMessage = {
      level: 'debug',
      message: 'test message',
      optionalParams: [{ test1: 'text', test2: 1 }],
    };
    jest
      .spyOn(logger, 'debug')
      .mockImplementation((message, optionalParams) =>
        logger.formatMessage('debug', message, optionalParams),
      );
    expect(logger.debug('test message', { test1: 'text', test2: 1 })).toEqual(
      JSON.stringify(mockMessage),
    );
  });

  it('.verbose() should be verbose correct format', () => {
    const mockMessage = {
      level: 'verbose',
      message: 'test message',
      optionalParams: [{ test1: 'text', test2: 1 }],
    };
    jest
      .spyOn(logger, 'verbose')
      .mockImplementation((message, optionalParams) =>
        logger.formatMessage('verbose', message, optionalParams),
      );
    expect(logger.verbose('test message', { test1: 'text', test2: 1 })).toEqual(
      JSON.stringify(mockMessage),
    );
  });
});
