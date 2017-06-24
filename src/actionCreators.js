import {
  LOCAL_STORAGE_REMOVE_ITEM,
  LOCAL_STORAGE_SET_ITEM,
} from './actionTypes'

export const removeItem = (key) => {
  return {
    type: LOCAL_STORAGE_REMOVE_ITEM,
    payload: {
      key,
    },
  }
}

export const setItem = (key, value) => {
  return {
    type: LOCAL_STORAGE_SET_ITEM,
    payload: {
      key,
      value,
    },
  }
}
