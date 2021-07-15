export const GET_CART_ITEMS = 'GET_CART_ITEMS';

export type ActionTypes = { type: typeof GET_CART_ITEMS };

export const getCartItems = (): ActionTypes => ({ type: GET_CART_ITEMS });
