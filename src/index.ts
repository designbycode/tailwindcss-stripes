import { comment } from "postcss"
import { version as packageVersion } from "../package.json"

const plugin = require("tailwindcss/plugin")

const { convertToRgb } = require("../utils/convert-to-rgb")

module.exports = plugin.withOptions(
  function () {
    return function ({ e, addBase, addComponents, addUtilities, matchUtilities, theme }: any) {
      const themeColors = theme("colors")

      addBase([
        comment({
          text: `!  tailwindcss-stripes v${packageVersion} | MIT License | https://designbycode.co.za`,
        }),
      ])

      addBase({
        "@keyframes slides": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(var(--stripes-size))" },
        },
        ":root": {
          "--stripes-rgb": "0 0 0",
          "--stripes-angle": "-45deg",
          "--stripes-speed": "1s",
          "--stripes-direction": "forwards",
          "--stripes-opacity": "1",
          "--stripes-size": "20px",
          "--stripes-width": "10%",
        },
      })

      addComponents({
        ".stripes": {
          position: "relative",
          overflow: "hidden",
          isolation: "isolate",
        },
        ".stripes:before": {
          "--stripes-color": "rgb(var(--stripes-rgb) / var(--stripes-opacity))",
          content: '""',
          position: "absolute",
          top: "0",
          right: "0",
          width: "calc(100% + var(--stripes-size))",
          height: "100%",
          pointerEvents: "none",
          backgroundImage: `linear-gradient(var(--stripes-angle), var(--stripes-color) 5%, transparent 5%, transparent 45%, var(--stripes-color) 45%, var(--stripes-color) 55%, transparent 55%, transparent 95%, var(--stripes-color) 95%)`,
          backgroundSize: "var(--stripes-size) var(--stripes-size)",
          animation: "var(--stripes-speed) slides infinite linear var(--stripes-direction)",
        },
      })

      addUtilities({
        ".stripes-reverse": { "--stripes-direction": "reverse" },
      })

      matchUtilities(
        {
          "stripes-opacity": (value: any) => ({
            "--stripes-opacity": value,
          }),
        },
        {
          values: theme("opacity"),
        }
      )

      matchUtilities(
        {
          "stripes-size": (value: any) => ({
            "--stripes-size": value,
          }),
        },
        {
          values: theme("stripeSizes"),
        }
      )

      addUtilities(
        Object.keys(themeColors).reduce((stripes, key) => {
          if (typeof themeColors[key] === "string") {
            return {
              ...stripes,
              [`.stripes-${e(key)}`]: {
                "--stripes-rgb": convertToRgb(themeColors[key]),
              },
            }
          }
          if (typeof themeColors[key] === "function") {
            return {
              ...stripes,
              [`.stripes-${e(key)}`]: {
                "--stripes-rgb": convertToRgb(themeColors[key]({})),
              },
            }
          }

          const colorShades = Object.keys(themeColors[key])

          return {
            ...stripes,
            ...colorShades.reduce(
              (a, shade) => ({
                ...a,
                [`.stripes-${e(key)}-${shade}`]: {
                  "--stripes-rgb": convertToRgb(themeColors[key][shade]),
                },
              }),
              {}
            ),
          }
        }, {})
      )

      matchUtilities(
        {
          stripes: (value: any) => {
            return {
              "--stripes-rgb": `${convertToRgb(value)}`,
            }
          },
        },
        {
          values: theme("stripeColors"),
        }
      )
    }
  },
  function () {
    return {
      theme: {
        stripeSizes: {
          xm: "6px",
          sm: "12px",
          md: "20px",
          lg: "30px",
          xl: "40px",
          "2xl": "50px",
          "3xl": "60px",
        },
      },
    }
  }
)
