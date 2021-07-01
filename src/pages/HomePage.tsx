import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Navbar from '../components/navbar';

const HomePage = (): JSX.Element => {
	const classes = useStyles();

	return (
		<div>
			<Navbar />
			<div className={classes.wrapper}>HomePage</div>
		</div>
	);
};

export default HomePage;

const useStyles = makeStyles((theme: Theme) => ({
	wrapper: {}
}));
