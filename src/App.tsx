import { createMuiTheme, ThemeProvider, Theme } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './components/navbar';

const App = (): JSX.Element => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Navbar />
			<Router />
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
