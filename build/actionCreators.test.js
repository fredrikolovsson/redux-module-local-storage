'use strict';

var _actionCreators = require('./actionCreators');

var _actionTypes = require('./actionTypes');

describe('actionCreators', function () {
  describe('removeItem', function () {
    it('returns removeItem action', function () {
      var key = 'key';
      var expectedAction = {
        type: _actionTypes.LOCAL_STORAGE_REMOVE_ITEM,
        payload: {
          key: key
        }
      };

      expect((0, _actionCreators.removeItem)(key)).toEqual(expectedAction);
    });
  });

  describe('setItem', function () {
    it('returns setItem action', function () {
      var key = 'key';
      var value = 'value';
      var expectedAction = {
        type: _actionTypes.LOCAL_STORAGE_SET_ITEM,
        payload: {
          key: key,
          value: value
        }
      };

      expect((0, _actionCreators.setItem)(key, value)).toEqual(expectedAction);
    });
  });
});