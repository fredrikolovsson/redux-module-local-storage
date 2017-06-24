'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getItem = exports.getItem = function getItem(key) {
  if (!localStorage) {
    return console.error('localStorage is missing');
  }

  return localStorage.getItem(key);
};

var removeItem = exports.removeItem = function removeItem(key) {
  if (!localStorage) {
    return console.error('localStorage is missing');
  }

  localStorage.removeItem(key);
};

var setItem = exports.setItem = function setItem(key, value) {
  if (!localStorage) {
    return console.error('localStorage is missing');
  }

  localStorage.setItem(key, value);
};