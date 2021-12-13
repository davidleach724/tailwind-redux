import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchData } from '../../apiCalls';
import { IssuesCards } from '../issuesCards/IssuesCards';

export const Issues = () => {
  const [issues, setIssues] = useState(null);
  const status = useSelector((state) => state.status.value)
  const currentFavorites = useSelector((state) => state.favorite.value)

  useEffect(() => {
    console.log(status)
    if (status === 'favorite') {
      setIssues(currentFavorites)
    } else {
      fetchData(status)
      .then((data) => setIssues(data))
    }
  }, [status, currentFavorites]);

  

  return (
    <>
      {issues != null && <IssuesCards issues={issues}/>}
    </>
  );
};