import * as FollowApiUtil from '../util/follow_api_util';
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";
export const RECEIVE_ALL_FOLLOWS = "RECEIVE_ALL_FOLLOWS";

const receiveAllFollows= payload => ({
    type: RECEIVE_ALL_FOLLOWS,
    payload
});

const receiveFollow = (follow) => ({
    type: RECEIVE_FOLLOW,
    follow,
    // followIds
});

const removeFollow = (follow, users) => {
    debugger
    return({
    type: REMOVE_FOLLOW,
    follow: follow,
    followId: follow.id,
    userId: follow.following_id,
    users: users });
};


export const fetchFollows = () => dispatch => (
    FollowApiUtil.fetchFollows().then(follows => {
        dispatch(receiveAllFollows(follows))})
)

export const createFollow = (followtype) => dispatch => (
    FollowApiUtil.createFollow(followtype).then((follow,user) => dispatch(receiveFollow(follow,user)))
)

export const deleteFollow = (followId) => dispatch => {
    return(
    FollowApiUtil.deleteFollow(followId).then(followId => dispatch(removeFollow(followId)))
)}
