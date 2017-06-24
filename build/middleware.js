'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createLocalStorageMiddleware;

var _actionTypes = require('./actionTypes');

var _utils = require('./utils');

function createLocalStorageMiddleware() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$removeItem = _ref.removeItem,
      removeItem = _ref$removeItem === undefined ? _utils.removeItem : _ref$removeItem,
      _ref$setItem = _ref.setItem,
      setItem = _ref$setItem === undefined ? _utils.setItem : _ref$setItem;

  return function localStorageMiddleware() {
    return function (next) {
      return function (action) {
        var result = next(action);

        switch (action.type) {
          case _actionTypes.LOCAL_STORAGE_SET_ITEM:
            {
              setItem(action.payload.key, action.payload.value);
              break;
            }
          case _actionTypes.LOCAL_STORAGE_REMOVE_ITEM:
            {
              removeItem(action.payload.key);
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