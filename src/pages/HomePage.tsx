import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Navbar from '../components/navbar';
import CarouselSection from '../components/carousel_section';

import { products } from '../components/product/data';
import CarouselDoubleSection from '../components/carousel_double_section';

const HomePage = (): JSX.Element => {
	const classes = useStyles();

	return (
		<div className={classes.wrapper}>
			<Navbar />
			<CarouselSection products={products} title="LIQUIDAÇÃO DE INVERNO" subtitle="ÓCULOS A PARTIR DE R$69,90" />
			<CarouselDoubleSection products={products} title="Lentes Multifocal" subtitle="a partir de R$339" />
			<CarouselSection products={products} title="MAIS VENDIDOS" subtitle="VEJA TODOS" />
			<CarouselDoubleSection
				products={products}
				title="Lentes Multifocal"
				subtitle="a partir de R$339"
				direction="row-reverse"
			/>
		</div>
	);
};

export default HomePage;

const useStyles = makeStyles((theme: Theme) => ({
	wrapper: {}
}));
