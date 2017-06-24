export const getItem = (key) => {
  if (!localStorage) {
    return console.error('localStorage implementation is missing') // eslint-disable-line no-console
  }

  return localStorage.getItem(key)
}

export const removeItem = (key) => {
  if (!localStorage) {
    return console.error('localStorage implementation is missing') // eslint-disable-line no-console
  }

  localStorage.removeItem(key)
}

export const setItem = (key, value) => {
  if (!localStorage) {
    return console.error('localStorage implementation is missing') // eslint-disable-line no-console
  }

  localStorage.setItem(key, value)
}
