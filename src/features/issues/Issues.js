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
      <h2>This is the issues component</h2>
      {issues && 
        <p>YouTube dislike button has {issues.total_count} issues</p>}
      {issues && <IssuesCards issues={issues} />}
    </>
  );
};