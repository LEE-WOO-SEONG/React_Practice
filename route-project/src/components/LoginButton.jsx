import React, { useState } from 'react';
import { withRouter, Redirect } from 'react-router-dom'; // Higher Order Component

function LoginButton(props) {
  console.log(props);
  const [logState, setLogState] = useState(false);

  if (logState) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <button onClick={changeLogState}>Redirect</button>
      <button onClick={movePage}>page move</button>
    </>
  );

  function changeLogState() {
    setLogState(logState => !logState); // state변경에 의한 재 rendering 발생으로 Redirect.
  }

  function movePage() {
    setTimeout(() => {
      props.history.push('/'); // js식 라우팅 이동
    }, 1000);
  }
}

export default withRouter(LoginButton);
