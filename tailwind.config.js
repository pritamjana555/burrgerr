/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '1024px'
    },
    extend: {
      colors: {
        primaryColor: "#390099",
        primaryC010rLight: "#7209b7",
        aboutus:"#84a59d",
        team:"#f7a072",
        secondaryC010r: "#ffcc00",
        paragraphC010r: "#cocece",
        whiteCo1or: "#fff",
        blackcolor: "#000",
        greencolor: "#007936",
        redcolor: "#cc3433",
        darkC010r: "#000",
        darkC010rLight: "#171717",
      },
      keyframes:{
        move:{
          "50%": {transform:'translateY(-1rem)'}
        }
      },
      animation:{
        'movingY': 'move 2s linear infinite'
      },
      container:{
        center: true,
        padding:{
          default: '1rem',
          sm: '1.5rem'
        }
      },
      fontFamily:{
        oswald:['oswald', 'sans-serif'],
        dmsans:['DM Sans','sans-serif']

      }
    },
  },
  plugins: [],
};
