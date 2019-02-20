import { connect } from "react-redux";
import BoardViewThree from './board_view_three';
import { fetchBoards } from '../../actions/board_actions';
import { fetchUserPins } from '../../actions/pin_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';
import { openModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';




const mapStateToProps = (state, ownProps) => {
    let currentUserId = state.session.id;
    return ({
        currentUserId: currentUserId,
        currentUser: state.entities.users[currentUserId],
        boards: Object.values(state.entities.boards),
        user: state.entities.users[ownProps.match.params.userId],
        pins: Object.values(state.entities.pins)
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchBoards: (userId) => dispatch(fetchBoards(userId)),
        fetchUserPins: (userId) => dispatch(fetchUserPins(userId)),
        deleteBoard: (id) => dispatch(deleteBoard(id)),
        openModal: (modal, boardId) => dispatch(openModal(modal, { boardId })),
        createFollow: (follow) => dispatch(createFollow(follow)),
        deleteFollow: (followId) => dispatch(deleteFollow(followId))
    });
};

export default withRouter((connect(mapStateToProps, mapDispatchToProps)(BoardViewThree)));