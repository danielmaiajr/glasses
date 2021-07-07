import { makeStyles, Theme } from '@material-ui/core/styles';

import { Container, Button } from '@material-ui/core';

import { ProductType } from '../../components/product/data';

interface PropTypes {
	product: ProductType;
}

const Description = ({ product }: PropTypes) => {
	const classes = useStyles();

	return (
		<div className={classes.wrapper}>
			<div className={classes.name}>
				{product.brand} {product.model}
			</div>
			<div className={classes.product_description}>
				{product.name} - {product.color}
			</div>
			<Color product={product} />
			<div className={classes.price}>R$ {product.price},00</div>
			<div className={classes.descountPrice}>R$ {product.descountPrice},00</div>
			<div className={classes.debitPrice}>R$ {product.debitPrice},00</div>
			<button className={classes.button}>Adicionar</button>
			<div className={classes.a}>7 DIAS PARA TROCA OU DEVOLUÇÃO GRÁTIS</div>
			<div className={classes.b}>Política de troca e devolução</div>
		</div>
	);
};

export default Description;

const useStyles = makeStyles((theme: Theme) => ({
	wrapper: {
		padding: '50px 0',
		marginLeft: 30,
		[theme.breakpoints.down('sm')]: {
			margin: 0
		}
	},
	name: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#000'
	},
	product_description: {
		fontSize: 14,
		color: '#666'
	},
	price: {
		fontSize: 16,
		color: '#808080',
		textDecoration: 'line-through',
		padding: '2px 0'
	},
	descountPrice: {
		fontSize: 16,
		fontWeight: 600,
		padding: '2px 0'
	},
	debitPrice: {
		fontSize: 20,
		fontWeight: 700,
		padding: '2px 0'
	},
	button: {
		width: '100%',
		marginTop: 40,
		padding: 15,
		fontWeight: 700,
		backgroundColor: '#D13939',
		color: '#FFF'
	},
	a: {
		fontSize: 10,
		fontWeight: 500,
		padding: 5,
		textAlign: 'center'
	},
	b: {
		fontSize: 11,
		color: '#666',
		fontWeight: 500,
		textAlign: 'center',
		textDecoration: 'underline'
	}
}));

const Color = ({ product }: { product: ProductType }) => {
	const classes = useColorStyles();

	return (
		<div className={classes.wrapper}>
			<span className={classes.span}>CORES </span>
			{product.image.map((_, i) => {
				return <button className={classes.button} key={i} />;
			})}
		</div>
	);
};

const useColorStyles = makeStyles((theme) => ({
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		margin: '30px 0'
	},
	span: {
		fontSize: 10,
		fontWeight: 'bold'
	},
	button: {
		padding: 13,
		marginLeft: 5,
		backgroundColor: 'white',
		border: '1px solid #555',
		borderRadius: '50%',
		'&:hover': {
			cursor: 'pointer'
		}
	}
}));
