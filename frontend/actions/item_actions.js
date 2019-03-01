import * as ItemApiUtil from '../util/item_api_util';
export const RECEIVE_ITEM_ERRORS = 'RECEIVE_ITEM_ERRORS';

export const RECEIVE_ITEM = "RECEIVE_ITEM";

const receiveItem = payload  => ({
        type: RECEIVE_ITEM,
        payload
    });
    

const receiveItemErrors = (errors) => ({
  type: RECEIVE_ITEM_ERRORS,
  errors,
});
  export const createItem = item => dispatch => (
    ItemApiUtil.createItem(item).then(item => dispatch(receiveItem(item)), errors =>(
      dispatch(receiveItemErrors(errors.responseJSON))
    ))
  );
