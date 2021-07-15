import { ActionTypes, GET_CART_ITEMS } from '../actions/cartActions';

const cartState: any = [
	{
		test: 'cart'
	}
];

export default function(state = cartState, action: ActionTypes) {
	switch (action.type) {
		case GET_CART_ITEMS:
			return state;
		default:
			return state;
	}
}
