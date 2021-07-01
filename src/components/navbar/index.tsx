import { useState } from 'react';

import { makeStyles, Theme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import MyTextField from './MyTextField';
import SearchIcon from '@material-ui/icons/Search';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

import { ReactComponent as CartIcon } from './cart.svg';

import BackpropMenu, { BackdropMenuType } from './backdrop';
import Drawer from '../drawer';

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
					<div className={classes.logo}>Logo</div>
				</div>

				<div className={classes.search}>
					<MyTextField id="filled-full-width" label="Pesquisar" margin="dense" variant="outlined" fullWidth />
					<div className={classes.searchIcon}>
						<SearchIcon fontSize="inherit" />
					</div>
				</div>

				<div className={classes.navIcons}>
					<div>Meu Perfil</div>
					<div className={classes.cartIcon} onClick={OnClickCart}>
						<CartIcon style={{ width: 32, height: 32 }} />
					</div>
				</div>
			</Container>

			<Container className={classes.backdrop}>
				<BackpropMenu menu={Menus} />
			</Container>

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
		fontWeight: 'bold',
		[theme.breakpoints.down('sm')]: {
			marginLeft: 15
		}
	},
	search: {
		display: 'flex',
		alignItems: 'center',
		width: 450,
		[theme.breakpoints.down('sm')]: {
			display: 'none'
		}
	},
	searchIcon: {
		width: 55,
		height: 38,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(255, 255, 255, 0.17)',
		marginLeft: 1,
		marginTop: 4,
		fontSize: 25,
		color: '#AAA',
		cursor: 'pointer'
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
	backdrop: {
		[theme.breakpoints.down('sm')]: {
			display: 'none'
		}
	},
	bottomNav: {}
}));
