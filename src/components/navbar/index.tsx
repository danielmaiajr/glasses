import { useState } from 'react';

import { makeStyles, Theme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import SearchBar from '../search_bar';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

import { ReactComponent as CartIcon } from './cart.svg';

import BackpropMenu, { BackdropMenuType } from './backdrop';
import Drawer from '../drawer';
import { Link } from 'react-router-dom';

const Menus: BackdropMenuType[] = [
	{
		title: 'title',
		content: <div>content1</div>
	},
	{
		title: 'title',
		content: <div>content2</div>
	},
	{
		title: 'title',
		content: null
	},
	{
		title: 'title',
		content: null
	},
	{
		title: 'title',
		content: <div>content4</div>
	},
	{
		title: 'title',
		content: <div>content5</div>
	},
	{
		title: 'title',
		content: <div>content6</div>
	}
];

const Navbar = (): JSX.Element => {
	const classes = useStyles();

	const [ showMenu, setShowMenu ] = useState<boolean>(false);
	const [ showCart, setShowCart ] = useState<boolean>(false);
	const OnClickMenu: React.MouseEventHandler = (): void => setShowMenu(!showMenu);
	const OnClickCart: React.MouseEventHandler = (): void => setShowCart(!showCart);

	return (
		<div className={classes.wrapper}>
			<Container className={classes.navWrapper}>
				<div className={classes.logoWrapper}>
					<button className={classes.menuIcon} onClick={OnClickMenu}>
						<MenuRoundedIcon />
					</button>
					<Link to="/" className={classes.logo}>
						Logo
					</Link>
				</div>

				<div className={classes.search}>
					<SearchBar />
				</div>

				<div className={classes.navIcons}>
					<div>Minha Conta</div>
					<div className={classes.cartIcon} onClick={OnClickCart}>
						<CartIcon style={{ width: 32, height: 32 }} />
					</div>
				</div>
			</Container>

			<BackpropMenu menu={Menus} />

			<Drawer show={showMenu} onBackDropClick={OnClickMenu} ltr>
				Menu
			</Drawer>
			<Drawer show={showCart} onBackDropClick={OnClickCart}>
				CART
			</Drawer>
		</div>
	);
};

export default Navbar;

const useStyles = makeStyles((theme: Theme) => ({
	wrapper: {
		backgroundColor: '#000',
		color: '#FFF'
	},
	navWrapper: {
		width: '100%',
		height: 60,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	logoWrapper: {
		display: 'flex',
		alignItems: 'center'
	},
	menuIcon: {
		display: 'none',
		[theme.breakpoints.down('sm')]: {
			display: 'flex'
		}
	},
	logo: {
		color: '#FFF',
		fontWeight: 'bold',
		[theme.breakpoints.down('sm')]: {
			marginLeft: 15
		}
	},
	search: {
		width: 450,
		[theme.breakpoints.down('sm')]: {
			display: 'none'
		}
	},
	navIcons: {
		display: 'flex',
		alignItems: 'center'
	},
	cartIcon: {
		display: 'flex',
		alignItems: 'center',
		marginLeft: 50,
		cursor: 'pointer',
		[theme.breakpoints.down('sm')]: {
			display: 'none'
		}
	},
	bottomNav: {}
}));
