import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

const CartItem = ({ item }: any): JSX.Element => {
	const classes = useStyles();
	console.log(item);
	return (
		<div className={classes.wrapper}>
			<img src={item.image[0]} className={classes.image} />
			<div className={classes.itemWrapper}>
				<div className={classes.name}>{item.name}</div>
				<div className={classes.model}>{item.model}</div>
				<div className={classes.test}>
					<div className={classes.quantity}>Qnt: {item.quantity}</div>
					<div className={classes.price}>{item.price}</div>
				</div>
			</div>
		</div>
	);
};

export default CartItem;

const useStyles = makeStyles((theme: Theme) => ({
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		padding: '20px 0',
		borderBottom: '1px solid #CCC'
	},
	image: {
		width: 100,
		marginRight: 20
	},
	itemWrapper: {
		flex: 1
	},
	name: {
		textTransform: 'uppercase',
		fontWeight: 'bold',
		padding: '2px 0'
	},
	model: {
		color: '#555',
		fontSize: 14
	},
	test: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	quantity: {},
	price: {}
}));
