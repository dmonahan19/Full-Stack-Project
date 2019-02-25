import { connect } from "react-redux";
import PickBoardView from './pick_board_view';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
    let currentUserId = state.session.id;
    return ({
        currentUserId: currentUserId,
        user: state.entities.users[ownProps.match.params.userId],
        pins: Object.values(state.entities.pins)
    });
};



export default withRouter(connect(mapStateToProps, null)(PickBoardView));