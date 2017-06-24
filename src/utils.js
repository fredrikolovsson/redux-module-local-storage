export const getItem = (key) => {
  if (!localStorage) {
    return console.error('localStorage is missing')
  }

  return localStorage.getItem(key)
}

export const removeItem = (key) => {
  if (!localStorage) {
    return console.error('localStorage is missing')
  }

  localStorage.removeItem(key)
}

export const setItem = (key, value) => {
  if (!localStorage) {
    return console.error('localStorage is missing')
  }

  localStorage.setItem(key, value)
}
