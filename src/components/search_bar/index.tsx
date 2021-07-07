import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

import MyTextField from './MyTextField';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = (): JSX.Element => {
	const classes = useStyles();

	return (
		<div className={classes.wrapper}>
			<MyTextField id="filled-full-width" label="Pesquisar" margin="dense" variant="outlined" fullWidth />
			<div className={classes.searchIcon}>
				<SearchIcon fontSize="inherit" />
			</div>
		</div>
	);
};

export default SearchBar;

const useStyles = makeStyles((theme: Theme) => ({
	wrapper: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			boxShadow: '0 1px 3px rgba(0,0,0,.3)'
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
	}
}));
