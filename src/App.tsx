import { createMuiTheme, ThemeProvider, Theme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WebAssetIcon from '@material-ui/icons/WebAsset';

import CssBaseline from '@material-ui/core/CssBaseline';

import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import CartPage from './pages/CartPage';
import BottomNav, { routesType } from './components/bottom_navbar';

const routes: routesType[] = [
	{
		path: '/',
		name: 'Início',
		icon: <WebAssetIcon />
	},
	{
		path: '/search',
		name: 'Buscar',
		icon: <WebAssetIcon />
	},
	{
		path: '/cart',
		name: 'Carrinho',
		icon: <WebAssetIcon />
	}
];

const App = (): JSX.Element => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>
					<Route exact path="/search">
						<SearchPage />
					</Route>
					<Route exact path="/cart">
						<CartPage />
					</Route>
				</Switch>
				<BottomNav routes={routes} />
			</Router>
		</ThemeProvider>
	);
};

const theme: Theme = createMuiTheme({
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
					padding: 0
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
	}
});

export default App;
