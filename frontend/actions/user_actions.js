import * as UserApiUtil from '../util/user_api_util';
import { receiveCurrentUser, receiveErrors } from './session_actions';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS"
export const RECEIVE_SEARCH_USERS = "RECEIVE_SEARCH_USERS";


export const updateUser = (user,userId) => dispatch => {
    return UserApiUtil.updateUser(user,userId)
        .then(
            user => dispatch(receiveCurrentUser(user)),
            errors => dispatch(receiveErrors(errors.responseJSON))
            );
};


export const fetchSearchUsers = (searchQuery, history) => {
    return dispatch => {
        return UserApiUtil.fetchSearchUsers(searchQuery).then(users => {
            dispatch(receiveSearchUsers(users));
            history.push(`/users/${Object.keys(users)[0]}`);
        });
    };
};

export const fetchUsers = (userIds) => {
    return dispatch => {
        return UserApiUtil.fetchUsers(userIds).then(users => {
            dispatch(receiveAllUsers(users));
        });
    };
};

export const receiveSearchUsers = (users) => ({
    type: RECEIVE_SEARCH_USERS,
    users
})

export const receiveAllUsers = (users) => ({
    type: RECEIVE_ALL_USERS,
    users
});

