import { connect } from "react-redux";
import BoardShow from './board_show';
import { deleteBoard, fetchBoard } from '../../actions/board_actions';
import { fetchPins } from '../../actions/pin_actions';
import { fetchItems } from '../../actions/item_actions';


const mapStateToProps = (state) => {
    return({
        pins: Object.values(state.entities.pins),
    });
  };
  
  const mapDispatchToProps = (dispatch) => {
    return ({
        deleteBoard: id => dispatch(deleteBoard(id)),
        fetchBoard: id => dispatch(fetchBoard(id)),
        fetchPins: boardId => dispatch(fetchPins(boardId))
    });
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);