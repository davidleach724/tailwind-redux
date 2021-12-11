import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchData } from '../../apiCalls';
import { IssuesCards } from '../issuesCards/IssuesCards';

export const Issues = () => {
  const [issues, setIssues] = useState(null);
  const status = useSelector((state) => state.counter.value)

  useEffect(() => {
    if (!issues) {
      fetchData(status)
        .then((data) => setIssues(data))
    } 
  });

  

  return (
    <>
      {issues && 
        <p>YouTube dislike button has {issues.total_count} issues</p>}
        <br></br>
      {issues && <IssuesCards issues={issues} status={status}/>}
    </>
  );
};