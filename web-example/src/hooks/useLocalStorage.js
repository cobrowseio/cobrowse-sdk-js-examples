import { useState, useEffect } from 'react'
import { retrieve, store, remove } from '../utils/storage'

export const useLocalStorage = (key, initialValue) => {
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => retrieve(key, initialValue))

  useEffect(() => {
    // Handle the native `storage` event
    const handleStorageChange = (e) => {
      if (key !== e.key) {
        return
      }

      setStoredValue(retrieve(key, initialValue))
    }
    // Handle our custom `localStorageChange` event, for same window updates
    const handleCustomStorageChange = (e) => {
      if (key !== e.detail.key) {
        return
      }

      setStoredValue(e.detail.newValue)
    }

    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('localStorageChange', handleCustomStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('localStorageChange', handleCustomStorageChange)
    }
  }, [key, initialValue])

  // Return a wrapped version of useState's setter function that persists the new value to localStorage
  const setValue = (value) => {
    // Allow value to be a function, so we have same API as useState
    const valueToStore = value instanceof Function
      ? value(storedValue)
      : value

    setStoredValue(valueToStore)

    store(key, valueToStore)
  }

  const removeValue = () => {
    remove(key)

    setStoredValue(undefined)
  }

  return [storedValue, setValue, removeValue]
}
