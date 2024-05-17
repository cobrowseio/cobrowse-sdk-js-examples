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
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.log(error)
  }
}

export const remove = (key) => {
  try {
    window.localStorage.removeItem(key)
  } catch (error) {
    console.log(error)
  }
}