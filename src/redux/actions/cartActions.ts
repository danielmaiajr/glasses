export const GET_CART_ITEMS = 'GET_CART_ITEMS';
export const ADD_ITEMS_CART = 'ADD_ITEMS_CART';
export const SUB_ITEMS_CART = 'SUB_ITEMS_CART';
export const DELETE_CART_ITEM = 'DELETE_CART_ITEM';
export const CHANGE_SHOW_CART = 'CHANGE_SHOW_CART';

export type ActionTypes =
	| { type: typeof GET_CART_ITEMS; payload: any }
	| { type: typeof ADD_ITEMS_CART; payload: any }
	| { type: typeof SUB_ITEMS_CART; payload: any }
	| { type: typeof DELETE_CART_ITEM; payload: any }
	| { type: typeof CHANGE_SHOW_CART; payload: any };

export const addItemsCart = (id: string): ActionTypes => ({ type: ADD_ITEMS_CART, payload: id });

export const getCartItems = () => ({
	type: GET_CART_ITEMS,
	payload: []
});

export const subItemsCart = (item: any) => ({
	type: SUB_ITEMS_CART,
	payload: item
});

export const deleteItemsCart = () => ({
	type: DELETE_CART_ITEM,
	payload: []
});

export const changeShowCart = () => ({
	type: CHANGE_SHOW_CART,
	payload: null
});
