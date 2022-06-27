module.exports = {
  //content: [
  //  "./src/**/*.{js,jsx,ts,tsx}",
  //  "./node_modules/flowbite/**/*.js"
  //],
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: 'class',
  theme: {
    extend: {},
    screens: {
      'xsm': '355px',
      // => @media (min-width: 640px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '868px',
      // => @media (min-width: 768px) { ... }

      'nr': '985px',
      // => @media (min-width: 768px) { ... }
      //nr :navbar responsive

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}