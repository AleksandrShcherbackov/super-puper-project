/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,vue}'],
  theme: {
    extend: {
      colors: {
        darkBlue: {
          DEFAULT: '#606E8C', // Основной темно-синий цвет
          light: '#A2A2D0',    // Светлый оттенок темно-синего
          dark: '#B0B7C6',     // Темный оттенок темно-синего
        },
        orange: {
          DEFAULT: '#F97316',  // Основной оранжевый цвет
          light: '#FB923C',    // Светлый оттенок оранжевого
          dark: '#C2410C',     // Темный оттенок оранжевого
        },
      },
      maxHeight: {
        '540px': '540px', // Максимальная высота 480 пикселей
      }
    },
  },
  plugins: []
}
