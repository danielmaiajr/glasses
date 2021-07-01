import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles';

import { ProductType } from './data';

interface PropType {
	data: ProductType;
}
const Product = ({ data }: PropType): JSX.Element => {
	const classes = useStyles();

	return (
		<div className={classes.wrapper}>
			<div>
				<img src={data.image} width="100%" alt={data.name} />
			</div>
			<div className={clsx(classes.text, classes.textBold)}>
				{data.brand} - {data.model}
			</div>
			<div className={clsx(classes.text, classes.textSecondary)}>
				{data.model} - {data.color}
			</div>
			<div className={clsx(classes.text, classes.textBold)}>R${data.price},00</div>
		</div>
	);
};

export default Product;

const useStyles = makeStyles((theme: Theme) => ({
	wrapper: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		cursor: 'pointer',
		padding: 15
	},
	text: {
		letterSpacing: 1,
		padding: 2.5
	},
	textBold: {
		fontWeight: 'bold'
	},
	textSecondary: {
		color: '#AAA'
	}
}));
