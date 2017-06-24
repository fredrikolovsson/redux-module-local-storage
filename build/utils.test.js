'use strict';

var _utils = require('./utils');

describe('utils', function () {
  var localStorageMock = void 0;
  beforeEach(function () {
    localStorageMock = {
      getItem: jest.fn(),
      removeItem: jest.fn(),
      setItem: jest.fn()
    };
  });

  describe('getItem', function () {
    it('calls getItem on the provided localStorage implementation', function () {
      (0, _utils.getItem)('key', localStorageMock);
      expect(localStorageMock.getItem.mock.calls.length).toBe(1);
      expect(localStorageMock.getItem.mock.calls[0]).toEqual(['key']);
    });
  });

  describe('removeItem', function () {
    it('calls removeItem on the provided localStorage implementation', function () {
      (0, _utils.removeItem)('key', localStorageMock);
      expect(localStorageMock.removeItem.mock.calls.length).toBe(1);
      expect(localStorageMock.removeItem.mock.calls[0]).toEqual(['key']);
    });
  });

  describe('setItem', function () {
    it('calls setItem on the provided localStorage implementation', function () {
      (0, _utils.setItem)('key', 'value', localStorageMock);
      expect(localStorageMock.setItem.mock.calls.length).toBe(1);
      expect(localStorageMock.setItem.mock.calls[0]).toEqual(['key', 'value']);
    });
  });
});