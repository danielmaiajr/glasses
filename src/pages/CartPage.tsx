import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

const CartPage = (): JSX.Element => {
	const classes = useStyles();

	return <div className={classes.wrapper}>CartPage</div>;
};

export default CartPage;

const useStyles = makeStyles((theme: Theme) => ({
	wrapper: {}
}));
