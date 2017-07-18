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

    it('returns empty string', () => {
      const emptyString = ''
      localStorageMock = {
        getItem: () => emptyString,
      }
      const result = getItem('key', localStorageMock)
      expect(result).toBe(emptyString)
    })

    it('returns non-empty string', () => {
      const stringValue = 'string'
      localStorageMock = {
        getItem: () => stringValue,
      }
      const result = getItem('key', localStorageMock)
      expect(result).toBe(stringValue)
    })

    it('returns boolean', () => {
      const booleanValue = false
      localStorageMock = {
        getItem: () => booleanValue,
      }
      const result = getItem('key', localStorageMock)
      expect(result).toBe(booleanValue)
    })

    it('returns undefined', () => {
      const undefinedValue = undefined
      localStorageMock = {
        getItem: () => undefinedValue,
      }
      const result = getItem('key', localStorageMock)
      expect(result).toBe(undefinedValue)
    })

    it('returns null', () => {
      const nullValue = null
      localStorageMock = {
        getItem: () => nullValue,
      }
      const result = getItem('key', localStorageMock)
      expect(result).toBe(nullValue)
    })

    it('returns object', () => {
      const objectValue = {
        name: {
          first: 'first',
          last: 'last',
        },
        verified: true,
      }
      localStorageMock = {
        getItem: () => JSON.stringify(objectValue),
      }
      const result = getItem('key', localStorageMock)
      expect(result).toEqual(objectValue)
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
      const key = 'key'
      const value = 'value'
      const stringifiedValue = JSON.stringify(value)
      setItem(key, value, localStorageMock)
      expect(localStorageMock.setItem.mock.calls.length).toBe(1)
      expect(localStorageMock.setItem.mock.calls[0]).toEqual(['key', stringifiedValue])
    })

    it('calls setItem with a stringified object', () => {
      const key = 'user'
      const value = {
        age: 31,
        name: {
          first: 'first',
          last: 'last',
        },
        email: undefined,
        address: null,
        verified: true,
      }
      const stringifiedValue = JSON.stringify(value)

      setItem(key, value, localStorageMock)

      expect(localStorageMock.setItem.mock.calls.length).toBe(1)
      expect(localStorageMock.setItem.mock.calls[0]).toEqual([key, stringifiedValue])
    })
  })
})
