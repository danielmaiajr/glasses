import { makeStyles, Theme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import Carousel from '../carousel';
import Product from '../product';

import { ProductType } from '../product/data';

interface PropTypes {
	title: string;
	subtitle: string;
	products: ProductType[];
}

const CarouselSection = ({ title, subtitle, products }: PropTypes): JSX.Element => {
	const classes = useStyles();

	return (
		<Container>
			<div className={classes.titleWrapper}>
				<div className={classes.title}>{title}</div>
				<div className={classes.subtitle}>{subtitle}</div>
			</div>
			<Carousel>{products.map((prod) => <Product data={prod} />)}</Carousel>
		</Container>
	);
};

export default CarouselSection;

const useStyles = makeStyles((theme: Theme) => ({
	titleWrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		paddingTop: 20
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold'
	},
	subtitle: {
		fontSize: 11,
		padding: 5,
		color: '#888'
	}
}));
