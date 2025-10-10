import { TskvLogger } from './tskvLogger';

describe('test tskvLogger', () => {
  let logger: TskvLogger;

  beforeEach(() => {
    logger = new TskvLogger();
  });

  it('.log() should be log correct format', () => {
    const mockMessage =
      'level=log\tmessage=test message\toptionalParams=[{"test1":"text","test2":1}]';
    jest
      .spyOn(logger, 'log')
      .mockImplementation((message, optionalParams) =>
        logger.formatMessage('log', message, optionalParams),
      );
    expect(logger.log('test message', { test1: 'text', test2: 1 })).toEqual(
      mockMessage,
    );
  });

  it('.error() should be error correct format', () => {
    const mockMessage =
      'level=error\tmessage=test message\toptionalParams=[{"test1":"text","test2":1}]';
    jest
      .spyOn(logger, 'error')
      .mockImplementation((message, optionalParams) =>
        logger.formatMessage('error', message, optionalParams),
      );
    expect(logger.error('test message', { test1: 'text', test2: 1 })).toEqual(
      mockMessage,
    );
  });

  it('.warn() should be warn correct format', () => {
    const mockMessage =
      'level=warn\tmessage=test message\toptionalParams=[{"test1":"text","test2":1}]';
    jest
      .spyOn(logger, 'warn')
      .mockImplementation((message, optionalParams) =>
        logger.formatMessage('warn', message, optionalParams),
      );
    expect(logger.warn('test message', { test1: 'text', test2: 1 })).toEqual(
      mockMessage,
    );
  });

  it('.debug() should be debug correct format', () => {
    const mockMessage =
      'level=debug\tmessage=test message\toptionalParams=[{"test1":"text","test2":1}]';
    jest
      .spyOn(logger, 'debug')
      .mockImplementation((message, optionalParams) =>
        logger.formatMessage('debug', message, optionalParams),
      );
    expect(logger.debug('test message', { test1: 'text', test2: 1 })).toEqual(
      mockMessage,
    );
  });

  it('.verbose() should be verbose correct format', () => {
    const mockMessage =
      'level=verbose\tmessage=test message\toptionalParams=[{"test1":"text","test2":1}]';
    jest
      .spyOn(logger, 'verbose')
      .mockImplementation((message, optionalParams) =>
        logger.formatMessage('verbose', message, optionalParams),
      );
    expect(logger.verbose('test message', { test1: 'text', test2: 1 })).toEqual(
      mockMessage,
    );
  });
});
