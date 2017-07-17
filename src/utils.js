/* eslint-disable no-undef, max-len */
export const getItem = (key, localStorageImplementation = localStorage) => {
  if (!localStorageImplementation) {
    return console.error('localStorage implementation is missing') // eslint-disable-line no-console
  }

  return localStorageImplementation.getItem(key)
}

export const removeItem = (key, localStorageImplementation = localStorage) => {
  if (!localStorageImplementation) {
    return console.error('localStorage implementation is missing') // eslint-disable-line no-console
  }

  return localStorageImplementation.removeItem(key)
}

export const setItem = (key, value, localStorageImplementation = localStorage) => {
  if (!localStorageImplementation) {
    return console.error('localStorage implementation is missing') // eslint-disable-line no-console
  }

  return localStorageImplementation.setItem(key, value)
}
