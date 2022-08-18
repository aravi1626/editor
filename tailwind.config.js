// Generate common sizes to use across css props
const prefix = 'px-'
const convertPxToRem = (px) => `${px / 16}rem`
const sizes = Array(100)
	.fill(undefined)
	.map((_, index) => index + 1)
const commonSizes = sizes.reduce((acc, px) => ({ ...acc, [`${prefix}${px}`]: convertPxToRem(px) }), {})
const safelistVariants = ['tablet']

module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	safelist: [
		// widths
		{ pattern: /w-full/, variants: safelistVariants },
		{ pattern: /w-\d{1,2}\/12/, variants: safelistVariants },
		// width/height
		{ pattern: /([wh])-px-(2|4|8|10|12|14|16|18|20|24|28|32|46|64|100)/, variants: safelistVariants },
		// flex
		'flex',
		{ pattern: /flex-(col|row)/, variants: safelistVariants },
		{ pattern: /items-(start|center|end|stretch)/, variants: safelistVariants },
		{ pattern: /justify-(start|center|end|around|between|evenly)/, variants: safelistVariants },
		{ pattern: /justify-items-(start|center|end|stretch)/, variants: safelistVariants },
		// grids
		'grid',
		{ pattern: /grid-cols-([123])/, variants: safelistVariants },
		// gaps
		{ pattern: /(gap|gap-y|gap-x)-px-(2|4|8|16|20|32|40|64)/, variants: safelistVariants },
		// paddings
		{ pattern: /^(p|pt|pb|pl|pr|px|py)-px-(2|4|8|16|32|64|100)/, variants: safelistVariants },
		// margins
		{ pattern: /^(mx|my)-auto/, variants: safelistVariants },
		{ pattern: /^(m|mt|mb|ml|mr|mx|my)-px-(2|4|8|16|32|64|100)/, variants: safelistVariants },
		// text-colors
		{ pattern: /text-(primary|secondary)/ },
		// text-sizes
		{ pattern: /text-px-(2|4|8|10|12|14|16|18|20|24|28|32|46|64|100)/, variants: safelistVariants },
		// font-family
		{ pattern: /font-(primary|secondary)/ },
		// font-weight
		{ pattern: /font-(thin|light|normal|medium|semibold|bold)/ },
		// bg colors
		{ pattern: /bg-(primary|secondary)/ },
		// rounded
		{ pattern: /rounded-px-(2|4|8|16)/, variants: safelistVariants },
		// overflow
		{ pattern: /overflow-(visible|hidden)/, variants: safelistVariants },

		// position type
		{ pattern: /(absolute|relative)/ },
		// position
		'inset-0',
		{ pattern: /(top|bottom|left|right)-px-(2|4|8|10|12|14|16|18|20|24|28|32|46|64|100)/ },
	],
	theme: {
		container: {
			padding: {
				DEFAULT: '1.25rem',
				tablet: '1.5rem',
				laptop: '1.5rem',
				desktop: '1.75rem',
			},
		},
		colors: {
			inherit: 'inherit',
			current: 'currentColor',
			transparent: 'transparent',
			black: '#000',
			white: '#fff',
			// Here goes our setup for color guidelines
			primary: 'black',
			secondary: 'white',
			colorAccent: '#0e7dfb',
			colorDarkAccent: '#0862ca',
			colorGold: '#FFB800',
			colorPink: '#FF1E6F',
			colorDanger: '#ef4444',
			colorLightDanger: '#fca5a5',
			colorPerfectGrey: '#fafafa',
			colorLightGrey: '#f7f7f7',
			colorMidLightGrey: '#f5f5f5',
			colorGrey: '#c4c4c4',
			colorMidGrey: '#949494',
			colorBlueGrey: '#5a6268',
			colorCharcoal: '#3C3B3B',
			colorDarkCharcoal: '#191919',
		},
		fontFamily: {
			// Here goes our setup for font family guidelines
			primary: ['Abel', 'sans-serif'],
			secondary: ['Inter', 'sans-serif'],
		},
		screens: {
			// Tailwind apply mobile first approach so no need to set up mobile breakpoint
			tablet: '768px',
			laptop: '1024px',
			desktop: '1280px',
			wide: '1536px',
			midwide: '1860px',
			ultrawide: '2048px',
		},
		letterSpacing: {
			normal: '0',
			medium: '.01em',
			large: '.02em',
			widest: '.2em',
			wide: '.1em',
		},
		extend: {
			maxWidth: {
				...commonSizes,
			},
			fontSize: {
				...commonSizes,
			},
			lineHeight: {
				...commonSizes,
			},
			spacing: {
				...commonSizes,
			},
			borderWidth: {
				...commonSizes,
			},
			borderRadius: {
				...commonSizes,
			},
			backdropBlur: {
				...commonSizes,
			},
			ringWidth: {
				...commonSizes,
			},
		},
	},
}
