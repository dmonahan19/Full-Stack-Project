import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions'
import { merge } from 'lodash';


const FollowsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_FOLLOW:
            return merge({}, state, { [action.follow.id]: action.follow })
        case REMOVE_FOLLOW:
            let newState = merge({}, state)
            delete newState[action.followId]
            return newState
        default:
            return state
    }
}

export default FollowsReducer