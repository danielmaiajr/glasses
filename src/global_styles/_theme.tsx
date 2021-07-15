import { createMuiTheme, Theme } from '@material-ui/core/styles';

export const theme: Theme = createMuiTheme({
	overrides: {
		MuiCssBaseline: {
			'@global': {
				html: {
					WebkitFontSmoothing: 'auto'
				},
				body: {
					backgroundColor: '#FFF'
				},
				'*': {
					boxSizing: 'border-box',
					margin: 0,
					padding: 0,
					'-webkit-tap-highlight-color': 'transparent'
				},
				img: {
					pointerEvents: 'none',
					userSelect: 'none'
				},
				a: {
					textDecoration: 'none',
					color: '#000'
				},
				button: {
					color: 'inherit',
					backgroundColor: 'inherit',
					border: 'none',
					'&:hover': {
						cursor: 'pointer'
					}
				}
			}
		}
	},
	typography: {
		h2: {
			fontSize: 24,
			padding: '8px 0',
			fontWeight: 500
		},
		h3: {
			fontSize: 18,
			lineHeight: '24px',
			padding: '8px 0',
			fontWeight: 500
		},
		h4: {
			fontSize: 18,
			lineHeight: '24px',
			padding: '8px 0'
		},
		h5: {
			fontSize: 14,
			padding: '8px 0',
			fontWeight: 700
		},
		h6: {
			fontSize: 14,
			padding: '8px 0',
			alignItems: 'center'
		}
	}
});
