import { connect } from "react-redux";
import Splash from './splash'



const mapStateToProps = (state) => {
  return({
    currentUserId: state.session.id
  });
};


export default connect(mapStateToProps, null)(Splash);