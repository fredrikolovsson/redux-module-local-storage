import { getItem, removeItem, setItem } from './utils'

describe('utils', () => {
  let localStorageMock
  beforeEach(() => {
    localStorageMock = {
      getItem: jest.fn(),
      removeItem: jest.fn(),
      setItem: jest.fn(),
    }
  })

  describe('getItem', () => {
    it('calls getItem on the provided localStorage implementation', () => {
      getItem('key', localStorageMock)
      expect(localStorageMock.getItem.mock.calls.length).toBe(1)
      expect(localStorageMock.getItem.mock.calls[0]).toEqual(['key'])
    })
  })

  describe('removeItem', () => {
    it('calls removeItem on the provided localStorage implementation', () => {
      removeItem('key', localStorageMock)
      expect(localStorageMock.removeItem.mock.calls.length).toBe(1)
      expect(localStorageMock.removeItem.mock.calls[0]).toEqual(['key'])
    })
  })

  describe('setItem', () => {
    it('calls setItem on the provided localStorage implementation', () => {
      setItem('key', 'value', localStorageMock)
      expect(localStorageMock.setItem.mock.calls.length).toBe(1)
      expect(localStorageMock.setItem.mock.calls[0]).toEqual(['key', 'value'])
    })

    it('calls setItem with a stringified object', () => {
      const key = 'user'
      const value = {
        name: {
          first: 'first',
          last: 'last',
        },
        verified: true,
      }
      const stringifiedValue = JSON.stringify(value)

      setItem(key, value, localStorageMock)

      expect(localStorageMock.setItem.mock.calls.length).toBe(1)
      expect(localStorageMock.setItem.mock.calls[0]).toEqual([key, stringifiedValue])
    })
  })
})
