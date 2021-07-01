import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Navbar from '../components/navbar';
import CarouselSection from '../components/carousel_section';

import { products } from '../components/product/data';

const HomePage = (): JSX.Element => {
	const classes = useStyles();

	return (
		<div>
			<Navbar />
			<CarouselSection products={products} title="LIQUIDAÇÃO DE INVERNO" subtitle="ÓCULOS A PARTIR DE R$69,90" />
			<CarouselSection products={products} title="MAIS VENDIDOS" subtitle="VEJA TODOS" />
		</div>
	);
};

export default HomePage;

const useStyles = makeStyles((theme: Theme) => ({
	wrapper: {}
}));
