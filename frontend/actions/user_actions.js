import * as UserApiUtil from '../util/user_api_util';
import * as ApiUtil from '../util/session_api_util';

import { receiveCurrentUser, receiveErrors } from './session_actions';


export const updateUser = (user,userId) => dispatch => {
    return UserApiUtil.updateUser(user,userId)
        .then(
            user => dispatch(receiveCurrentUser(user)),
            errors => dispatch(receiveErrors(errors.responseJSON))
            );
};