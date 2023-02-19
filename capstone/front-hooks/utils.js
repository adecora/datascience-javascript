// Exercise5. Formatting.
const isFloat = (num) => !!(num % 1)

export const parseFloats = (data) => data.map(row => 
  Object.entries(row).reduce((acc, [key, value]) => {
    if (typeof value !== 'number' || !isFloat(value)) 
      acc[key] = value
    else 
      acc[key] = Number(value.toFixed(1))
    return acc
}, {})) 