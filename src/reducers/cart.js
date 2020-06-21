import {
  REMOVE_ITEM,
  INCREMENT_AMOUNT,
  DECREMENT_AMOUNT,
} from '../actions/action-types/cart';
import jacket from '../imgs/jacket.jpg';
import boot from '../imgs/boot.jpg';
import salco from '../imgs/salco.jpg';

const initialState = {
  items: [
    {
      id: 5465,
      name: 'WOODLEY LEATHER JACKET',
      img: jacket,
      quantity: 1,
      price: 199,
    },
    {
      id: 5668,
      name: 'ASALCO CHINOS',
      img: salco,
      quantity: 1,
      price: 199,
    },
    {
      id: 5854,
      name: 'ROOK CHELESA BOOT',
      img: boot,
      quantity: 1,
      price: 199,
    },
  ],
  total: 597,
};

function cart(state = initialState, action) {
  switch (action.type) {
    case REMOVE_ITEM:
      const arrAfterRemoval = state.items.filter(
        (item) => item.id !== action.id
      );
      return {
        items: arrAfterRemoval,
        total: arrAfterRemoval.reduce(
          (acu, cur) => acu + cur.price * cur.quantity,
          0
        ),
      };
    case INCREMENT_AMOUNT:
      const arrAfterInc = state.items.map((item) => {
        if (item.id === action.id) {
          item.quantity++;
        }
        return item;
      });
      return {
        items: arrAfterInc,
        total: arrAfterInc.reduce(
          (acu, cur) => acu + cur.price * cur.quantity,
          0
        ),
      };
    case DECREMENT_AMOUNT:
      const itemToDec = state.items.find((item) => item.id === action.id);
      if (itemToDec.quantity <= 1) {
        const arrAfterRem = state.items.filter((item) => item.id !== action.id);
        return {
          items: arrAfterRem,
          total: arrAfterRem.reduce(
            (acu, cur) => acu + cur.price * cur.quantity,
            0
          ),
        };
      } else {
        const arrAfterDec = state.items.map((item) => {
          if (item.id === action.id) {
            item.quantity--;
          }
          return item;
        });
        return {
          items: arrAfterDec,
          total: arrAfterDec.reduce(
            (acu, cur) => acu + cur.price * cur.quantity,
            0
          ),
        };
      }
    default:
      return state;
  }
}

export default cart;
