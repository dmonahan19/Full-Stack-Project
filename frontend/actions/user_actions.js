import * as UserApiUtil from '../util/user_api_util';
import * as ApiUtil from '../util/session_api_util';

import { receiveCurrentUser, receiveErrors } from './session_actions';


export const updateUser = (user) => dispatch => {
    return UserApiUtil.updateUser(user)
        .then(
            user => dispatch(receiveCurrentUser(user))
            // errors => dispatch(receiveErrors(errors.responseJSON))
            );
};