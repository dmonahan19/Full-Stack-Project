import { connect } from "react-redux";
import Profile from './profile'

const mapStateToProps = (state) => {
    let currentUserId = state.session.id;
    return({
      currentUserId: currentUserId,
      user: state.entities.users[currentUserId] || defaultUser
    });
  };
  
//   const mapDispatchToProps = (dispatch) => {
//     return ({
     
//     });
//   };
  
  export default connect(mapStateToProps, null)(Profile);
