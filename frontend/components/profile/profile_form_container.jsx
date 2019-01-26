import { connect } from "react-redux";
import { updateUser } from "../../actions/user_actions"
import ProfileForm from './profile_form'

const mapStateToProps = (state, {photoFile}) => {
  let currentUserId = state.session.id;
  const defaultUser = {
    first_name: '',
    last_name: '',
    about_you: '',
    location: '',
    photoFile: null,
    photoUrl: null
  }
  return({
    currentUserId: currentUserId,
    user: state.entities.users[currentUserId] || defaultUser,
    errors: state.errors.session,
    photoFile
  });
};

  const mapDispatchToProps = (dispatch) => {
    return ({
        updateUser: (user,userId)=> dispatch(updateUser(user,userId))
    });
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
