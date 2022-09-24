import { CartState } from './cart-slice';
import { UiState } from './ui-slice';

export enum StateSlices {
  Ui = 'ui',
  Cart = 'cart',
}

export interface AppState {
  ui: UiState;
  cart: CartState;
}
