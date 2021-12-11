import { useEffect, useState } from 'react';
import { fetchData } from '../../apiCalls';
import { IssuesCards } from '../issuesCards/IssuesCards';

export const Issues = () => {
  const [issues, setIssues] = useState(null);

  useEffect(() => {
    if (!issues) {
      fetchData()
        .then((data) => setIssues(data))
    } 
  });

  

  return (
    <>
      {issues && 
        <p>YouTube dislike button has {issues.total_count} issues</p>}
        <br></br>
      {issues && <IssuesCards issues={issues} />}
    </>
  );
};