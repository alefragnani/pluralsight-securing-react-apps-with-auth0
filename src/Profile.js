import React, { useEffect } from 'react';

const Profile = (props) => {

  const [state, setState] = React.useState({profile: null, error: ""});

  useEffect(() => {
    loadUserProfile();
  }, []);

  const loadUserProfile =() => {
    props.auth.getProfile( (profile, error) => {
      setState({profile, error});
    })
  }

  if (!state.profile) return null;

  return (
    <div>
      <h1>
        Profile
      </h1>
      <p>{state.profile.nickname}</p>
      <img
        style={{ maxWidth: 50, maxHeight: 50 }}
        src={state.profile.picture}
        alt="Profile pic"
      />
      <pre>{JSON.stringify(state.profile, null, 2)}</pre>
    </div>
  );
}

export default Profile;