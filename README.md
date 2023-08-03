# Tailwind CSS Stripes Plugin
![Static Badge](https://img.shields.io/badge/%40designbycode%2Ftailwindcss-stripes)
![npm](https://img.shields.io/npm/dt/%40designbycode/tailwindcss-stripes)


![NPM](https://img.shields.io/npm/l/tailwindcss-stripes)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/tailwindcss-stripes)
[![GitHub stars](https://img.shields.io/github/stars/DesignByCode/tailwindcss-stripes?style=social)](https://github.com/DesignByCode/tailwindcss-stripes/stargazers)

[![NPM](https://nodei.co/npm/@designbycode/tailwindcss-stripes.png)](https://nodei.co/npm/@designbycode/tailwindcss-stripes/)



The Tailwind CSS Stripes Plugin provides a set of utility classes and components that allow you to easily create striped backgrounds for your HTML elements. It offers a flexible way to customize the color, size, opacity, and animation direction of the stripes.

## Installation
To use the Tailwind CSS Stripes Plugin, you need to have Tailwind CSS installed in your project. If you don't have it yet, you can follow the installation guide to set it up.

Once you have Tailwind CSS installed, you can add the Stripes Plugin to your project using npm or yarn:

```bash
npm install @designbycode/tailwindcss-stripes
```
or
```bash
pnpm install @designbycode/tailwindcss-stripes
```
or
```bash
yarn install @designbycode/tailwindcss-stripes
```

## Configuration
To enable the Stripes Plugin, you need to add it to your Tailwind CSS configuration file. Open your tailwind.config.js and import the plugin at the top of the file:

```javascript
module.exports = {
  // Your existing configuration...
  plugins: [
    // Other plugins...
    require("@designbycode/tailwindcss-stripes"),
  ],
};
```

## Usage
Once the Stripes Plugin is installed and added to your configuration, you can start using the utility classes and components to create striped backgrounds.

### Utility Classes
The plugin provides the following utility classes:

#### Stripes Utility

```.stripes```

The ```.stripes``` class creates a container with relative positioning, isolates its contents from being affected by the animation, and hides any overflowing content. It serves as the base class for creating the striped effect.

```html
<div class="stripes">
  <!-- Your content here -->
</div>
```

#### Stripes Color Modifier

```.stripes-{value}```

The ```.stripes-{value}``` class sets the color of the stripes to selected value. You can use it to create any color stripes on your elements.

```html
<div class="stripes stripes-rose-500">
  <!-- Your content here -->
</div>

<!-- by color name or arbitrary value -->

<div class="stripes stripes-[chocolate] stripes-[#ff000]">
    <!-- Your content here -->
</div>

```

#### Stripes Direction Modifier

```.stripes-reverse```

The ```.stripes-reverse``` class reverses the direction of the stripes' animation. It creates a cool effect where the stripes appear to move in the opposite direction.

```html
<div class="stripes stripes-reverse">
  <!-- Your content here -->
</div>

```

#### Stripes Opacity Modifier

```.stripes-opacity-{value}```

The ```.stripes-opacity-{value}``` classes allow you to control the opacity of the stripes. Replace {value} with the desired opacity level. The available values are defined in your Tailwind CSS opacity configuration.

```html
<div class="stripes stripes-opacity-50">
  <!-- Your content here -->
</div>

<!-- or by arbitrary value -->
<div class="stripes stripes-opacity-[0.12]">
    <!-- Your content here -->
</div>

```
#### Stripes Size Modifier

```.stripes-size-{value}```

The ```.stripes-size-{value}``` classes let you adjust the size of the stripes. Replace {value} with one of the custom stripe sizes defined in your Tailwind CSS stripeSizes configuration.

```html
<div class="stripes stripes-size-md">
  <!-- Your content here -->
</div>
<!-- or by arbitrary size value -->
<div class="stripes stripes-size-[42px]">
    <!-- Your content here -->
</div>
```

## Customization
You can customize the plugin by modifying the theme section in your Tailwind CSS configuration file. The plugin allows you to define custom stripe sizes and use them as utility classes.

```javascript
module.exports = {
  theme: {
    extend: {
      stripeSizes: {
        // Define your custom stripe sizes here
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "40px",
        "3xl": "48px",
      },
    },
  },
  plugins: [
    // Other plugins...
    stripesPlugin,
  ],
};

```

By adding or modifying the custom stripe sizes, you can use the .stripes-size-{value} utility classes with your defined sizes.

## Conclusion
The Tailwind CSS Stripes Plugin simplifies the process of creating striped backgrounds with utility classes and components. You can easily apply striped patterns to your elements using the provided classes and customize their appearance according to your project's needs. The plugin offers control over colors, sizes, opacity, and animation direction, making it a powerful addition to your Tailwind CSS toolkit.








