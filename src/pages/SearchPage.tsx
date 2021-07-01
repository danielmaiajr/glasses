import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

const SearchPage = (): JSX.Element => {
	const classes = useStyles();

	return <div className={classes.wrapper}>SearchPage</div>;
};

export default SearchPage;

const useStyles = makeStyles((theme: Theme) => ({
	wrapper: {}
}));
