/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
          fontFamily:{
       poppins:['Poppins','sans-serif'],
       title_font:["Sriracha",'cursive']
      },
      cursor: {
        'custom': 'url("cursor2.cur"),pointer', // Use a custom cursor image if desired
      },
      colors:{
        'primary':'#faf0e6',
        'secondary':'#DAD7CD',
        'night':'#231e23'
      },
      backgroundImage: {
 
        'signUpBgMobile': "url('https://plus.unsplash.com/premium_vector-1727788272421-383c77f4c92f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D')",
        'signUpBg': "url('https://plus.unsplash.com/premium_vector-1683121878874-68e4ea65d2ee?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D')",
        'sighUpBgDark':"url('./src/images/signup_dark.png')",
        // 'sighUpBgDark':"url('https://plus.unsplash.com/premium_vector-1730906883159-fee2f3955328?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHBldHxlbnwwfHwwfHx8MA%3D%3D')"
      }
    },
  },
  plugins: 
  [flowbite.plugin()]
}

