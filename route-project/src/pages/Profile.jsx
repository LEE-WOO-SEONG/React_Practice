import React from 'react';

export default function Profile({ match }) {
  const id = Number(match.params.id);
  const pw = match.params.pw;

  if (isNaN(id)) {
    return (
      <div>
        <h1>Profile 페이지</h1>
      </div>
    );
  }
  if (pw) {
    return (
      <div>
        <h1>Profile </h1>
        <div>id: {id} </div>
        <div>pw : {pw}</div>
      </div>
    );
  }
  return (
    <div>
      <h1>Profile : {id}</h1>
    </div>
  );
}
