import { connect } from 'react-redux';
import {fetchProfile} from '../actions/actions_profile';

import ProfileComponent from '../components/App';
import Profile from '../components/Profile';

const mapStateToProps = state => {
  return {
    profile : state.profile
  };
}


const mapDispatchToProps = (dispatch, ownProps)=> {
    return {
        fetchProfile : () => {
            dispatch(fectchProfile());
        }
    }
}

const profile = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileComponent);

export default Profile;
