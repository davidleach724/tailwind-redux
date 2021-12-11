import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchData } from '../../apiCalls';
import { IssuesCards } from '../issuesCards/IssuesCards';

export const Issues = () => {
  const [issues, setIssues] = useState(null);
  const status = useSelector((state) => state.status.value)

  useEffect(() => {
    fetchData(status)
      .then((data) => setIssues(data))
  }, [status]);

  

  return (
    <>
      {/* {issues != null && <IssuesCards issues={issues}/>} */}
    </>
  );
};