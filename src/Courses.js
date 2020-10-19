import React, { useEffect } from 'react';

const Courses = (props) => {

  const [state, setState] = React.useState({
    courses: []
  });

  useEffect(() => {
    fetch("/course", {
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
        setState({courses: response.courses});
      })
      .catch(error => {
        setState({message: error.message});
      })

    fetch("/admin", {
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
        console.log(response);
      })
      .catch(error => {
        setState({message: error.message});
      })
  }, [props.auth]);

  return (
    <ul>{state.courses.map(course => {
      return <li key={course.id}>{course.title}</li>
    })}
    </ul>
  );
}

export default Courses;