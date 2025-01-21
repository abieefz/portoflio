/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    }, // <-- Tambahkan koma di sini
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        spacemono: ['"Space Mono"', 'monospace'],
      },
      colors: {
        primary: '#8EB486',  // ganti dengan warna yang diinginkan
        dark: '#997C70',     // ganti dengan warna yang diinginkan
        secondary: '#997C70',
        warnagelap: '#B6CBBD',
        textbody:'#E7FBB4', 
        colorbg: '#FDF7F4',// ganti dengan warna yang diinginkan
        button: '#DF6D2D',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  darkmode: 'class',
  plugins: [],
}