import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import WebAssetIcon from '@material-ui/icons/WebAsset';
import CssBaseline from '@material-ui/core/CssBaseline';

import { theme } from './global_styles/_theme';
import store from './redux/store';

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

const App = (): JSX.Element => (
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
);

export const AppWrapper = (): JSX.Element => (
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<App />
		</ThemeProvider>
	</Provider>
);
