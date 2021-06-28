import { makeStyles, Theme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import MyTextField from './MyTextField';
import SearchIcon from '@material-ui/icons/Search';

const Navbar = (): JSX.Element => {
	const classes = useStyles();

	return (
		<div className={classes.wrapper}>
			<Container className={classes.navWrapper}>
				<div className={classes.logo}>Logo</div>

				<div className={classes.search}>
					<MyTextField id="filled-full-width" label="Pesquisar" margin="dense" variant="outlined" fullWidth />
					<div className={classes.searchIcon}>
						<SearchIcon fontSize="inherit" />
					</div>
				</div>

				<div className={classes.navIcons}>
					<div>Profile</div>
					<div>Cart</div>
				</div>
			</Container>
		</div>
	);
};

export default Navbar;

const useStyles = makeStyles((theme: Theme) => ({
	wrapper: {
		width: '100%',
		height: 60,
		display: 'flex',
		alignItems: 'center',
		backgroundColor: '#000',
		color: '#FFF'
	},
	navWrapper: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	logo: {
		fontWeight: 'bold'
	},
	search: {
		display: 'flex',
		alignItems: 'center',
		width: 450
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
		display: 'flex'
	}
}));
