import {
	ActionTypes,
	ADD_ITEMS_CART,
	SUB_ITEMS_CART,
	CHANGE_SHOW_CART,
	GET_CART_ITEMS,
	DELETE_CART_ITEM
} from '../actions/cartActions';

const initialState = {
	cartItems: [],
	showCart: false
};

export function cartReducer(state: any = initialState, action: ActionTypes) {
	const { cartItems, showCart } = state;
	const { payload } = action;
	let exist: any;
	let items = cartItems;

	switch (action.type) {
		case GET_CART_ITEMS:
			return {
				...state,
				cartItems: payload
			};

		case ADD_ITEMS_CART:
			console.log(payload);
			exist = items.find((i: any) => payload.id === i.id);
			if (exist) {
				const index = items.indexOf(exist);
				items[index].quantity += 1;
				//localStorage.setItem('cart', JSON.stringify(items));
				return {
					...state,
					cartItems: items
				};
			} else {
				payload.quantity = 1;
				items.push(payload);
				//localStorage.setItem('cart', JSON.stringify(items));
				return {
					...state,
					cartItems: items
				};
			}

		case SUB_ITEMS_CART:
			exist = items.find((i: any) => payload.id === i.id);
			if (exist && exist.quantity > 1) {
				const index = items.indexOf(exist);
				items[index].quantity -= 1;
				//localStorage.setItem('cart', JSON.stringify(items));
				return {
					...state,
					cartItems: items
				};
			} else {
				if (exist) {
					const test = items.filter((a: any) => a.id !== exist.id);
					//localStorage.setItem('cart', JSON.stringify(test));
					return {
						...state,
						cartItems: test
					};
				}
			}
			return {
				...state
			};

		case DELETE_CART_ITEM:
			return {
				...state,
				cartItems: []
			};

		case CHANGE_SHOW_CART:
			return {
				...state,
				showCart: !showCart
			};

		default:
			return state;
	}
}
