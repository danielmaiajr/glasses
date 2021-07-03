import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import { ProductType } from './data';

interface PropType {
	data: ProductType;
}
const Product = ({ data }: PropType): JSX.Element => {
	const classes = useStyles();

	return (
		<Link to={`/product/${data.id}`} className={classes.wrapper}>
			<div>
				<img src={data.image[0]} width="100%" alt={data.name} />
			</div>
			<div className={clsx(classes.text, classes.textBold)}>
				{data.brand} - {data.model}
			</div>
			<div className={clsx(classes.text, classes.textSecondary)}>
				{data.model} - {data.color}
			</div>
			<div className={clsx(classes.text, classes.textBold)} style={{ color: '#555' }}>
				R${data.price},00
			</div>
		</Link>
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
