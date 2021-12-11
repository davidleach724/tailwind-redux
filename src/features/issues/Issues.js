import React from 'react';
import { useEffect, useState } from 'react';
import { fetchData } from '../../apiCalls';

export const Issues = () => {
  const [issues, setIssues] = useState(null);

 useEffect = (() => {
   console.log('enter')
   if (!issues) {
     console.log('testtest')
     setIssues('plzplz')
   }
 })


  return (
    <>
      <h1>Hello</h1>
      {issues && <p>data loaded</p>}
      {console.log('anyone?')}
    </>
  );
};
