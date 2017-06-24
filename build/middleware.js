'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createLocalStorageMiddleware;

var _actionTypes = require('./actionTypes');

var _utils = require('./utils');

function createLocalStorageMiddleware() {
  return function localStorageMiddleware(_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;

    return function (next) {
      return function (action) {
        var result = next(action);

        switch (action.type) {
          case _actionTypes.LOCAL_STORAGE_SET_ITEM:
            {
              (0, _utils.setItem)(action.payload.key, action.payload.value);
              break;
            }
          case _actionTypes.LOCAL_STORAGE_REMOVE_ITEM:
            {
              (0, _utils.removeItem)(action.payload.key);
              break;
            }
          default:
            {
              return result;
            }
        }

        return result;
      };
    };
  };
}