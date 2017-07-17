import { LOCAL_STORAGE_REMOVE_ITEM, LOCAL_STORAGE_SET_ITEM } from './actionTypes'

import { removeItem as DEFAULT_REMOVE_ITEM, setItem as DEFAULT_SET_ITEM } from './utils'

export default function createLocalStorageMiddleware(
  { removeItem = DEFAULT_REMOVE_ITEM, setItem = DEFAULT_SET_ITEM } = {},
) {
  return function localStorageMiddleware() {
    return next => action => {
      const result = next(action)

      switch (action.type) {
        case LOCAL_STORAGE_SET_ITEM: {
          setItem(action.payload.key, action.payload.value)
          break
        }
        case LOCAL_STORAGE_REMOVE_ITEM: {
          removeItem(action.payload.key)
          break
        }
        default: {
          return result
        }
      }

      return result
    }
  }
}
