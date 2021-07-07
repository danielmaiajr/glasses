import { createMuiTheme, ThemeProvider, Theme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WebAssetIcon from '@material-ui/icons/WebAsset';

import CssBaseline from '@material-ui/core/CssBaseline';

import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import CartPage from './pages/CartPage';
import ProductPage from './pages/product_page';

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

//TODO: create a container with padding to the routes to fix the bottomTab on top of part of the layout

const App = (): JSX.Element => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>
					<Route exact path="/product/:id">
						<ProductPage />
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

export default App;
