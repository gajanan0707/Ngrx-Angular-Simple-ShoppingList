import { shoppingAction, shoppingActionTypes } from '../Action/shopping.action';
import { shoppingItem } from '../Model/shopping-item.model';

const intialstate: Array<shoppingItem> = [
  {
    id: '23743fkjdhfjgetuy',
    name: 'Ngrx Store',
  },
  {
    id: '38748743fkjdhfjgetuy',
    name: 'Redux Store',
  },
];

export function shoppingReducer(
  state: Array<shoppingItem> = intialstate,
  action: shoppingAction
) {
  switch (action.type) {
    case shoppingActionTypes.ADD_ITEM:
      return [...state, action.payload];
    case shoppingActionTypes.DELETE_ITEM:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}
