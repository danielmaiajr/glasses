import { makeStyles, Theme } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

import { useDispatch, useSelector } from 'react-redux';
import { changeShowCart } from '../../redux/actions/cartActions';
import CartItem from './CartItem';

const Cart = (): JSX.Element => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const { cartItems } = useSelector((state: any) => state.cart);

	return (
		<div className={classes.wrapper}>
			<div className={classes.titleWrapper}>
				<div>MEU CARRINHO</div>
				<button style={{ marginRight: 20 }} onClick={() => dispatch(changeShowCart())}>
					<CloseIcon />
				</button>
			</div>
			<div className={classes.cartItemsWrapper}>
				{cartItems.map((item: any, i: number) => <CartItem key={i} item={item} />)}
			</div>
		</div>
	);
};

export default Cart;

const useStyles = makeStyles((theme: Theme) => ({
	wrapper: {
		color: '#FFF'
	},
	titleWrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 20,
		height: 100,
		backgroundColor: '#000',
		fontWeight: 'bold'
	},
	cartItemsWrapper: {
		color: '#000',
		padding: '0px 40px 0px 20px'
	}
}));
