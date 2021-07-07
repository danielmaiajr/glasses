import { makeStyles, Theme } from '@material-ui/core/styles';
import { useState } from 'react';

import Carousel from '../../components/carousel';
import { BreakpointTypes } from '../../components/carousel/_utils';

import { ProductType } from '../../components/product/data';

const breakPoints: BreakpointTypes[] = [ { width: 1, itemsToShow: 1 } ];

interface PropTypes {
	product: ProductType;
}

const Image = ({ product }: PropTypes) => {
	const classes = useStyles();
	const [ index, setIndex ] = useState(0);

	return (
		<div className={classes.wrapper}>
			<div className={classes.buttonWrapper}>
				{product.image.map((image, i) => (
					<button
						key={i}
						onClick={() => setIndex(i)}
						className={classes.button}
						style={index === i ? { borderColor: '#000' } : { borderColor: '#CCC' }}
					>
						<img alt={product.name} style={{ width: 40 }} src={image} />
					</button>
				))}
			</div>

			<Carousel breakPoints={breakPoints} initialIndex={index}>
				{product.image.map((image, i) => (
					<img alt={product.name} style={{ width: '100%' }} src={image} key={i} />
				))}
			</Carousel>
		</div>
	);
};

export default Image;

const useStyles = makeStyles((theme: Theme) => ({
	wrapper: {
		display: 'flex',
		width: '100%'
	},
	buttonWrapper: {
		paddingTop: 30,
		[theme.breakpoints.down('sm')]: {
			display: 'none'
		}
	},
	button: {
		padding: '18px 10px',
		border: '1px solid #CCC',
		backgroundColor: 'white',
		marginBottom: 5,
		'&:hover': {
			cursor: 'pointer'
		}
	}
}));
