import React from 'react';
import queryString from 'query-string';

export default function About({ location }) {
  // const name = new URLSearchParams(location.search).get('name'); // IE 지원불가
  const { name } = queryString.parse(location.search);

  if (name) {
    return (
      <div>
        <h1>About : {name} </h1>
      </div>
    );
  }
  return (
    <div>
      <h1>About 페이지</h1>
    </div>
  );
}
