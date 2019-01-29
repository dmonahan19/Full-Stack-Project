// import { RECEIVE_ITEM } from '../actions/item_actions';
//   import merge from 'lodash/merge';
  
//   const ItemsReducer = (oldState = {}, action) => {
//     Object.freeze(oldState);
//     switch (action.type) {
//       case RECEIVE_ITEM:
//         return merge({}, oldState, {[action.item.id]: action.item});
//       default:
//         return oldState;
//     }
//   };
  
//   export default ItemsReducer;