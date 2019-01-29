import * as ItemApiUtil from '../util/item_api_util';

export const RECEIVE_ITEM = "RECEIVE_ITEM";

const receiveItem = payload  => ({
        type: RECEIVE_ITEM,
        payload
    });
    
  export const createItem = item => dispatch => (
    ItemApiUtil.createItem(item).then(item => dispatch(receiveItem(item)))
  );
