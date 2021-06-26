import { createMuiTheme, ThemeProvider, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = (): JSX.Element => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />APP
		</ThemeProvider>
	);
};

const theme: Theme = createMuiTheme({
	overrides: {
		MuiCssBaseline: {
			'@global': {
				'*': {
					margin: 0
				}
			}
		}
	}
});

export default App;
