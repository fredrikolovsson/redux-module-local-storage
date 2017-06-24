export const getItem = (key, localStorageImplementation = localStorage) => { // eslint-disable-line no-undef, max-len
  if (!localStorageImplementation) {
    return console.error('localStorage implementation is missing') // eslint-disable-line no-console
  }

  return localStorageImplementation.getItem(key)
}

export const removeItem = (key, localStorageImplementation = localStorage) => { // eslint-disable-line no-undef, max-len
  if (!localStorageImplementation) {
    return console.error('localStorage implementation is missing') // eslint-disable-line no-console
  }

  return localStorageImplementation.removeItem(key)
}

export const setItem = (key, value, localStorageImplementation = localStorage) => { // eslint-disable-line no-undef, max-len
  if (!localStorageImplementation) {
    return console.error('localStorage implementation is missing') // eslint-disable-line no-console
  }

  return localStorageImplementation.setItem(key, value)
}
