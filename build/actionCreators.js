'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setItem = exports.removeItem = undefined;

var _actionTypes = require('./actionTypes');

var removeItem = exports.removeItem = function removeItem(key) {
  return {
    type: _actionTypes.LOCAL_STORAGE_REMOVE_ITEM,
    payload: {
      key: key
    }
  };
};

var setItem = exports.setItem = function setItem(key, value) {
  return {
    type: _actionTypes.LOCAL_STORAGE_SET_ITEM,
    payload: {
      key: key,
      value: value
    }
  };
};