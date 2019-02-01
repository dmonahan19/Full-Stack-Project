import * as UserApiUtil from '../util/user_api_util';
import { receiveCurrentUser, receiveErrors } from './session_actions';

export const RECEIVE_SEARCH_USERS = "RECEIVE_SEARCH_USERS";


export const updateUser = (user,userId) => dispatch => {
    return UserApiUtil.updateUser(user,userId)
        .then(
            user => dispatch(receiveCurrentUser(user)),
            errors => dispatch(receiveErrors(errors.responseJSON))
            );
};

export const fetchSearchUsers = (searchQuery) => {
    return dispatch => {
        return UserApiUtil.fetchSearchUsers(searchQuery).then(users => dispatch(receiveSearchUsers(users)));
    };
};
