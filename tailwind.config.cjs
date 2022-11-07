/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				body: ['Tofino', 'sans-serif']
			},
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
			keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
        }
      }
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
