import * as ApiUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';

export const login = (user) => dispatch => {
    return ApiUtil.login(user)
        .then(
            currentUser => dispatch(receiveCurrentUser(currentUser)),
            errors => dispatch(receiveErrors(errors.responseJSON))
            );
};

export const logout = () => dispatch => {
    return ApiUtil.logout()
        .then(
            user => dispatch(logoutCurrentUser())
            );
};

export const signup = (user) => dispatch => {
    return ApiUtil.signup(user)
        .then(
            user => dispatch(receiveCurrentUser(user)), 
            errors => dispatch(receiveErrors(errors.responseJSON))
            );
};

const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser,
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors,
});

