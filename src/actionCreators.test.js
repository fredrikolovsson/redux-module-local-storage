import { removeItem, setItem } from './actionCreators'

import { LOCAL_STORAGE_REMOVE_ITEM, LOCAL_STORAGE_SET_ITEM } from './actionTypes'

describe('actionCreators', () => {
  describe('removeItem', () => {
    it('returns removeItem action', () => {
      const key = 'key'
      const expectedAction = {
        type: LOCAL_STORAGE_REMOVE_ITEM,
        payload: {
          key,
        },
      }

      expect(removeItem(key)).toEqual(expectedAction)
    })
  })

  describe('setItem', () => {
    it('returns setItem action', () => {
      const key = 'key'
      const value = 'value'
      const expectedAction = {
        type: LOCAL_STORAGE_SET_ITEM,
        payload: {
          key,
          value,
        },
      }

      expect(setItem(key, value)).toEqual(expectedAction)
    })
  })
})
