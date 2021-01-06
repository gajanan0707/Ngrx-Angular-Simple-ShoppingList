import { Action } from '@ngrx/store';
import { shoppingItem } from '../Model/shopping-item.model';

export enum shoppingActionTypes {
  ADD_ITEM = '[SHOPPING] Add Item',
  DELETE_ITEM = '[SHOPPING] Delete Item',
}

export class AddItemAction implements Action {
  readonly type = shoppingActionTypes.ADD_ITEM;

  constructor(public payload: shoppingItem) {}
}

export class DeleteItemAction implements Action {
  readonly type = shoppingActionTypes.DELETE_ITEM;
  constructor(public payload: string) {}
}

export type shoppingAction = AddItemAction | DeleteItemAction;
