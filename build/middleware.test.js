'use strict';

var _actionTypes = require('./actionTypes');

var _middleware = require('./middleware');

var _middleware2 = _interopRequireDefault(_middleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('middleware', function () {
  var removeItem = void 0;
  var setItem = void 0;
  var middleware = void 0;
  var next = void 0;
  var store = void 0;
  beforeEach(function () {
    removeItem = jest.fn();
    setItem = jest.fn();
    middleware = (0, _middleware2.default)({
      removeItem: removeItem,
      setItem: setItem
    });
    next = jest.fn();
    store = {
      dispatch: jest.fn(),
      getState: jest.fn()
    };
  });

  it('calls next on dummy actionType', function () {
    var action = {
      type: 'dummyType',
      payload: {
        key: 'key'
      }
    };
    middleware(store)(next)(action);
    expect(next.mock.calls.length).toBe(1);
  });

  it('calls removeItem on ' + _actionTypes.LOCAL_STORAGE_REMOVE_ITEM, function () {
    var action = {
      type: _actionTypes.LOCAL_STORAGE_REMOVE_ITEM,
      payload: {
        key: 'key'
      }
    };
    middleware(store)(next)(action);
    expect(removeItem.mock.calls.length).toBe(1);
  });

  it('calls removeItem on ' + _actionTypes.LOCAL_STORAGE_SET_ITEM, function () {
    var action = {
      type: _actionTypes.LOCAL_STORAGE_SET_ITEM,
      payload: {
        key: 'key',
        value: 'value'
      }
    };
    middleware(store)(next)(action);
    expect(setItem.mock.calls.length).toBe(1);
  });
});