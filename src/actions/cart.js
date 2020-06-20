import {
  REMOVE_ITEM,
  INCREMENT_AMOUNT,
  DECREMENT_AMOUNT,
} from './action-types/cart';

export function RemoveItem(id) {
  return {
    type: REMOVE_ITEM,
    id,
  };
}

export function IncrementAmount(id) {
  return {
    type: INCREMENT_AMOUNT,
    id,
  };
}

export function DecrementAmount(id) {
  return {
    type: DECREMENT_AMOUNT,
    id,
  };
}
