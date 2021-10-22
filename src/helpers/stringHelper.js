export function formatKebabCase(string) {
  return string.replace(/\.?([A-Z]+)/g, m => `-${m.toLowerCase()}`)
}

export default { formatKebabCase }
