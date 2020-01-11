import {
    PROFILE_FETCHED
  } from '../actions/actions_info'
import Profile from '../components/Profile'
  
  const Profile = (state = {}, action) => {
    switch (action.type) {
      case PROFILE_FETCHED:
        return action.payload
      default:
        return state
    }
  }
  
  export default Profile
  