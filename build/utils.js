'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getItem = exports.getItem = function getItem(key) {
  var localStorageImplementation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : localStorage;
  // eslint-disable-line no-undef, max-len
  if (!localStorageImplementation) {
    return console.error('localStorage implementation is missing'); // eslint-disable-line no-console
  }

  return localStorageImplementation.getItem(key);
};

var removeItem = exports.removeItem = function removeItem(key) {
  var localStorageImplementation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : localStorage;
  // eslint-disable-line no-undef, max-len
  if (!localStorageImplementation) {
    return console.error('localStorage implementation is missing'); // eslint-disable-line no-console
  }

  return localStorageImplementation.removeItem(key);
};

var setItem = exports.setItem = function setItem(key, value) {
  var localStorageImplementation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : localStorage;
  // eslint-disable-line no-undef, max-len
  if (!localStorageImplementation) {
    return console.error('localStorage implementation is missing'); // eslint-disable-line no-console
  }

  return localStorageImplementation.setItem(key, value);
};