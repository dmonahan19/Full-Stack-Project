import { connect } from "react-redux";
import { updateUser } from "../../actions/user_actions"
import ProfileForm from './profile_form'

const mapStateToProps = (state) => {
  let currentUserId = state.session.id;
  return({
    currentUserId: currentUserId,
    user: state.entities.users[currentUserId],
    errors: state.errors.session,
  });
};

  const mapDispatchToProps = (dispatch) => {
    return ({
        updateUser: (user)=> dispatch(updateUser(user))
    });
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
