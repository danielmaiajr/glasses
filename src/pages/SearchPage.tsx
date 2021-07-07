import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

import SearchBar from '../components/search_bar';
import { Container } from '@material-ui/core';

const SearchPage = (): JSX.Element => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Container className={classes.searchWrapper}>
				<SearchBar />
			</Container>
			<Container style={{ marginTop: 10 }}>test</Container>
		</React.Fragment>
	);
};

export default SearchPage;

const useStyles = makeStyles((theme: Theme) => ({
	searchWrapper: {
		width: '100%',
		height: 60,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#000',
		color: '#FFF',
		[theme.breakpoints.down('sm')]: {
			boxShadow: '0 1px 3px rgba(0,0,0,.3)'
		}
	}
}));
