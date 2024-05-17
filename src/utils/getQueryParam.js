export const getQueryParam = (name) => {
  const urlParams = new URLSearchParams(window.location.search)
  const value = urlParams.get(name)

  if (['true', 'false'].includes(value)) {
    return value === 'true'
  }

  // Convert custom data to object
  if (name === 'custom_data') {
    return value?.split(',').reduce((acc, item) => {
      const [key, value] = item.split(':')

      acc[key] = value

      return acc
    }, {})
  }

  // Convert to array
  if (value?.includes(',')) {
    return value.split(',')
  }

  return value
}
