import React, { useEffect } from 'react';

const Public = () => {

  const [state, setState] = React.useState({
    message: ""
  });

  useEffect(() => {
    fetch("/public")
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
  }, []);

  return (
    <div>{state.message}</div>
  );
}

export default Public;