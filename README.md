Redux module interfacing with Window.localStorage

## Features
Supports storing of `string` and `object` values in `Window.localStorage`. Values are stringified on `set` and parsed, if possible, on `get`.

## Installation
```
npm install --save redux-module-local-storage
```

Apply middleware in your Redux store configuration:
``` javascript
import {
  middleware as localStorageMiddleware,
} from 'redux-module-local-storage'

const middleware = [
  localStorageMiddleware(), // need to invoke it, as it is a factory
]
```
## API
The following exports are available:
``` javascript
import {
  actionCreators,
  actionTypes,
  middleware,
  utils,
} from 'redux-module-local-storage'

const {
  removeItem,
  setItem,
} = actionCreators

const {
  LOCAL_STORAGE_REMOVE_ITEM,
  LOCAL_STORAGE_SET_ITEM,
} = actionTypes

const {
  getItem,
  removeItem,
  setItem,
} = utils
```

## Example
``` javascript
import {
  actionCreators as localStorageAC,
  utils as localStorageUtils,
} from 'redux-module-local-storage'

import {
  setIsLoggedIn,
} from './actionCreators'

import {
  AUTH_BOOTSTRAP,
  AUTH_LOGGED_IN,
  AUTH_LOGGED_OUT,
} from './actionTypes'

import {
  AUTH_TOKEN_KEY,
} from './constants'


export default function createAuthMiddleware() {
  return function authMiddleware({ dispatch, getState }) {
    return (next) => (action) => {
      // set token in localStorage before forwarding action
      if (action.type === AUTH_LOGGED_IN) {
        dispatch(localStorageAC.setItem(AUTH_TOKEN_KEY, action.payload.token))
      }

      const result = next(action)

      switch (action.type) {
        case AUTH_BOOTSTRAP: {
          // read token in localStorage to see if user is already logged in
          if (localStorageUtils.getItem(AUTH_TOKEN_KEY)) {
            dispatch(setIsLoggedIn(true))
          }
          break
        }
        case AUTH_LOGGED_OUT: {
          // remove token from localStorage
          dispatch(localStorageAC.removeItem(AUTH_TOKEN_KEY))
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
```
