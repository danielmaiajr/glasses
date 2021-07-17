import React, { useEffect, useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

import Navbar from '../../components/navbar';
import { Link, useParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import Image from './Image';
import Details from './Details';
import Description from './Description';
import CarouselSection from '../../components/carousel_section';

import { products, ProductType } from '../../components/product/data';
import { Container } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Footer from '../../components/footer';

const ProductPage = (): JSX.Element => {
	const classes = useStyles();

	const { id } = useParams<{ id: string }>();
	const [ product, setProduct ] = useState<ProductType | null>(null);

	useEffect(
		() => {
			const test = products.filter((prod) => prod.id === id);
			setProduct(test[0]);
		},
		[ id ]
	);

	return (
		<div>
			<Navbar />

			<Container style={{ marginTop: 30 }}>
				<Breadcrumbs aria-label="breadcrumb" style={{ fontSize: 12, textTransform: 'capitalize' }}>
					<Link to="/">Home</Link>
					<Link to="/brand">{product && product.brand}</Link>
					<Link to="/">{product && product.name}</Link>
				</Breadcrumbs>

				{product && (
					<Grid container>
						<Grid item xs={12} md={7}>
							<Image product={product} />
						</Grid>
						<Grid item xs={12} md={5}>
							<Description product={product} />
						</Grid>
					</Grid>
				)}

				<div className={classes.divider} />
			</Container>

			<CarouselSection title="SUGERIMOS TAMBÉM" products={products} />

			<Details />

			<Footer />
		</div>
	);
};

export default ProductPage;

const useStyles = makeStyles((theme: Theme) => ({
	container: {
		display: 'flex',
		flexDirection: 'row'
	},
	divider: {
		borderTop: '1px solid #DDD',
		margin: '30px 0'
	}
}));
