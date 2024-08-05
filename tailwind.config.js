/** @type {import('tailwindcss').Config} */
export default {
  content: [
   './src/*.{jsx,js}' ,
   './src/component/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        italiana: ['Italiana', 'serif'],
        jf: ['Jacques Francois', 'serif'],
      },
        colors :{
        myblue:'#DCEEF2',
        mygreenf:'#1A5319',
        mygreenc:'#508D4E', 
      }
    },
  },
  plugins: [],
}

