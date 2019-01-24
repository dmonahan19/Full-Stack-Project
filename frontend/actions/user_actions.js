import * as ApiUtil from '../util/user_util';
import { receiveCurrentUser, receiveErrors } from './session_actions';


export const updateUser = (user) => dispatch => {
    return ApiUtil.updateUser(user)
        .then(
            user => dispatch(receiveCurrentUser(user)), 
            errors => dispatch(receiveErrors(errors.responseJSON))
            );
};