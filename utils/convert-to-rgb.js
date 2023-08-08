import colorNames from "./color-names"

export function convertToRgb(color, theme) {
  try {
    if (typeof color === "object") {
      color = color.DEFAULT
    }

    color = color.replace(/\s/g, "")

    const hexPattern = /^#(?:[0-9a-fA-F]{3}){1,2}(?:[0-9a-fA-F]{2})?$/
    const rgbPattern = /^rgba?\((\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3})(?:,\s?([\d.]+))?\)$/
    const hslPattern = /^hsla?\((\d+),\s?([\d.]+)%,\s?([\d.]+)%,?\s?([\d.]+)?\)$/

    if (colorNames && typeof colorNames === "object") {
      const rgbValue = colorNames[color]
      if (rgbValue) {
        return `${rgbValue[0]} ${rgbValue[1]} ${rgbValue[2]}`
      }
    }

    if (hexPattern.test(color)) {
      let hex = color.slice(1)

      if (hex.length === 3) {
        hex = hex.replace(/./g, (char) => char + char)
      }

      const r = parseInt(hex.slice(0, 2), 16)
      const g = parseInt(hex.slice(2, 4), 16)
      const b = parseInt(hex.slice(4, 6), 16)

      return `${r} ${g} ${b}`
    }

    const rgbMatch = color.match(rgbPattern)
    if (rgbMatch) {
      const r = parseInt(rgbMatch[1], 10)
      const g = parseInt(rgbMatch[2], 10)
      const b = parseInt(rgbMatch[3], 10)

      return `${r} ${g} ${b}`
    }

    const hslMatch = color.match(hslPattern)
    if (hslMatch) {
      const h = parseInt(hslMatch[1], 10)
      const s = parseFloat(hslMatch[2])
      const l = parseFloat(hslMatch[3])

      const c = (1 - Math.abs(2 * l - 1)) * s
      const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
      const m = l - c / 2

      let r, g, b

      if (h >= 0 && h < 60) {
        ;[r, g, b] = [c, x, 0]
      } else if (h >= 60 && h < 120) {
        ;[r, g, b] = [x, c, 0]
      } else if (h >= 120 && h < 180) {
        ;[r, g, b] = [0, c, x]
      } else if (h >= 180 && h < 240) {
        ;[r, g, b] = [0, x, c]
      } else if (h >= 240 && h < 300) {
        ;[r, g, b] = [x, 0, c]
      } else {
        ;[r, g, b] = [c, 0, x]
      }

      r = Math.round((r + m) * 255)
      g = Math.round((g + m) * 255)
      b = Math.round((b + m) * 255)

      return `${r} ${g} ${b}`
    }

    if (theme && typeof theme === "object") {
      const colorValue = theme.colors[color]
      if (colorValue) {
        return convertToRgb(colorValue, theme)
      }
    }

    return null
  } catch (e) {
    throw new Error("Invalid color format. Supported formats: #RRGGBB, #RGB, rgb(255, 0, 128), rgba(255, 0, 128, 0.5), hsl(120, 100%, 50%), hsla(120, 100%, 50%, 0.5)")
  }
}

export function isValidColorFormat(color) {
  const hexPattern = /^#(?:[0-9a-fA-F]{3}){1,2}(?:[0-9a-fA-F]{2})?$/
  const rgbPattern = /^rgba?\((\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3})(?:,\s?([\d.]+))?\)$/
  const hslPattern = /^hsla?\((\d+),\s?([\d.]+)%,\s?([\d.]+)%,?\s?([\d.]+)?\)$/
  return hexPattern.test(color) || rgbPattern.test(color) || hslPattern.test(color)
}
