import * as FollowApiUtil from '../util/follow_api_util';
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

const receiveFollow = follow => ({
    type: RECEIVE_FOLLOW,
    follow
});

const removeFollow = (followId) => ({
    type: REMOVE_BOARD,
    followId
});

export const createFollow = (followtype) => dispatch => (
    FollowApiUtil.createFollow(followtype).then(follow => dispatch(receiveFollow(follow)))
)

export const deleteFollow = (followId) => dispatch => (
    FollowApiUtil.deleteFollow(followId).then(followId => dispatch(removeFollow(followId)))
)
