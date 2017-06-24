import {
  LOCAL_STORAGE_REMOVE_ITEM,
  LOCAL_STORAGE_SET_ITEM,
} from './actionTypes'

import createMiddleware from './middleware'

describe('middleware', () => {
  let removeItem
  let setItem
  let middleware
  let next
  let store
  beforeEach(() => {
    removeItem = jest.fn()
    setItem = jest.fn()
    middleware = createMiddleware({
      removeItem,
      setItem,
    })
    next = jest.fn()
    store = {
      dispatch: jest.fn(),
      getState: jest.fn(),
    }
  })

  it('calls next on dummy actionType', () => {
    const action = {
      type: 'dummyType',
      payload: {
        key: 'key',
      },
    }
    middleware(store)(next)(action)
    expect(next.mock.calls.length).toBe(1)
  })

  it(`calls removeItem on ${LOCAL_STORAGE_REMOVE_ITEM}`, () => {
    const action = {
      type: LOCAL_STORAGE_REMOVE_ITEM,
      payload: {
        key: 'key',
      },
    }
    middleware(store)(next)(action)
    expect(removeItem.mock.calls.length).toBe(1)
  })

  it(`calls removeItem on ${LOCAL_STORAGE_SET_ITEM}`, () => {
    const action = {
      type: LOCAL_STORAGE_SET_ITEM,
      payload: {
        key: 'key',
        value: 'value',
      },
    }
    middleware(store)(next)(action)
    expect(setItem.mock.calls.length).toBe(1)
  })
})
