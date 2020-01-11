export const PROFILE_FETCHED = 'PROFILE_FETCHED';
export const PROFILE_EDITED = 'PROFILE_EDITED';

export function fetchProfile() {
  return (dispatch) => {

    let header = new Headers({"Content-Type" : "application/json","Authoriztion":"token 719bd0dc90b6f6d6cc03a3f61d43f258f3fdec2a"});
    return fetch('https://api.github.com/users/lappiahnuamah', {
      method: 'GET',
      headers : header
    })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      dispatch(loadProfile(json))
    })
    .catch(error => console.log(error));
  }
  
}

export function loadProfile(results) {
  return {
    type : PROFILE_FETCHED,
    payload : results
  }
}
