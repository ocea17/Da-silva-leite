/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts}'
  ],
  theme: {
    extend: {
      // ─── Charte graphique Da Silva Leite ───
      colors: {
        brand: {
          foret:  '#1D3C24',  // Vert forêt — couleur principale
          vif:    '#6DC319',  // Vert vif — couleur secondaire
          moyen:  '#90C896',  // Vert moyen — couleur accent
          clair:  '#E8F5EB',  // Vert clair — couleur accent légère
        }
      },
      fontFamily: {
        // Poppins = corps de texte (charte graphique)
        poppins: ['Poppins', 'sans-serif'],
        // Bebas Neue = titres display
        display: ['"Bebas Neue"', 'sans-serif'],
      },
      // Espacements cohérents avec le design
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      // Animations Tailwind custom
      animation: {
        'fade-up':   'fadeUp 0.6s ease both',
        'fade-in':   'fadeIn 0.5s ease both',
        'float':     'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-10px)' }
        }
      }
    }
  },
  plugins: []
}
