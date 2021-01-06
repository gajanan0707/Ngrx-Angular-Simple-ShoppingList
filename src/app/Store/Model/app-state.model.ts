import { shoppingItem } from './shopping-item.model';

export interface AppState {
  readonly shopping: Array<shoppingItem>;
}
