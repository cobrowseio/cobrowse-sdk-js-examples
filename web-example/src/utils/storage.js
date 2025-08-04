const dispatchCustomEvent = (key, newValue, oldValue) => {
  window.dispatchEvent(new CustomEvent('localStorageChange', {
    detail: { key, newValue, oldValue }
  }))
}

export const retrieve = (key, initialValue) => {
  try {
    const item = window.localStorage.getItem(key)

    return item
      ? JSON.parse(item)
      : initialValue
  } catch (error) {
    console.log(error)

    return initialValue
  }
}

export const store = (key, value) => {
  try {
    const oldValue = retrieve(key)

    window.localStorage.setItem(key, JSON.stringify(value))

    dispatchCustomEvent(key, value, oldValue)
  } catch (error) {
    console.log(error)
  }
}

export const remove = (key) => {
  try {
    const oldValue = retrieve(key)

    window.localStorage.removeItem(key)

    dispatchCustomEvent(key, null, oldValue)
  } catch (error) {
    console.log(error)
  }
}
