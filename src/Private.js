import React, { useEffect } from 'react';

const Private = (props) => {

  const [state, setState] = React.useState({
    message: ""
  });

  useEffect(() => {
    fetch("/private", {
      headers: { Authorization: `Bearer ${props.auth.getAccessToken()}`}
    })
      .then(response => {
        if (response.ok) {
          console.log(response)
          return response.json();
        }

        throw new Error("Response whas not OK");
      })
      .then(response => {
        setState({message: response.message});
      })
      .catch(error => {
        setState({message: error.message});
      })
  }, [props.auth]);

  return (
    <div>{state.message}</div>
  );
}

export default Private;