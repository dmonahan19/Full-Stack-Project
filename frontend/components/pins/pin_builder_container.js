import { connect } from "react-redux";
import { createItem } from "../../actions/item_actions"
import { fetchBoards } from "../../actions/board_actions"

import PinBuilder from './pin_builder'

  const mapStateToProps = (state) => {
    let currentUserId = state.session.id;
    return({
      boards: Object.values(state.entities.boards),
      user: state.entities.users[currentUserId]
    });
  };


  const mapDispatchToProps = (dispatch) => {
    return ({
        createItem: (item) => dispatch(createItem(item)),
        fetchBoards: () => dispatch(fetchBoards()),

    });
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(PinBuilder);