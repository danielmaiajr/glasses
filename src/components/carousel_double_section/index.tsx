import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Grid, GridDirection } from '@material-ui/core';

import Carousel from '../carousel';
import Product from '../product';

import { ProductType } from '../product/data';

interface PropTypes {
	title: string;
	subtitle: string;
	products: ProductType[];
	direction?: GridDirection;
}

const CarouselDoubleSection = ({ title, subtitle, products, direction }: PropTypes): JSX.Element => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<div className={classes.titleWrapper}>
				<div className={classes.title}>{title}</div>
				<div className={classes.subtitle}>{subtitle}</div>
			</div>
			<Container style={{ padding: 20 }}>
				<Grid container spacing={5} direction={direction}>
					<Grid item xs={12} md={6}>
						<div className={classes.image} />
					</Grid>
					<Grid item xs={12} md={6}>
						<Carousel breakPoints={[ { width: 1, itemsToShow: 1 } ]}>
							{products.map((prod, i) => <Product data={prod} key={i} />)}
						</Carousel>
					</Grid>
				</Grid>
			</Container>
		</React.Fragment>
	);
};

export default CarouselDoubleSection;

const useStyles = makeStyles((theme: Theme) => ({
	titleWrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		paddingTop: 20
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		textTransform: 'uppercase'
	},
	subtitle: {
		fontSize: 11,
		padding: 5,
		color: '#888',
		textTransform: 'uppercase'
	},
	image: {
		border: '1px solid #CCC',
		width: '100%',
		height: '100%'
	}
}));
