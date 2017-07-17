/* eslint-disable no-undef, max-len */
export const getItem = (key, localStorageImplementation = localStorage) => {
  if (!localStorageImplementation) {
    return console.error('localStorage implementation is missing') // eslint-disable-line no-console
  }

  const unparsedValue = localStorageImplementation.getItem(key)

  try {
    const parsedValue = JSON.parse(unparsedValue)
    return parsedValue
  } catch (error) {
    return unparsedValue
  }
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

  return localStorageImplementation.setItem(key, JSON.stringify(value))
}
