import { useEffect, useState } from 'react';
import { fetchData } from '../apiCalls';
import { Counter } from '../features/counter/Counter';
import { CurrentAmount } from '../features/currentAmount/CurrentAmount';
import './App.css';

function App() {
  const [issues, setIssues] =  useState(null)

  useEffect(() => {
    if (issues === null) {
      fetchData()
      .then(data => setIssues(data))
      .then(console.log('DATA SET'))
    }
  })


  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Counter />
    <CurrentAmount />
    {issues && <p>{issues.total_count}</p>}
    </>
  );
}

export default App;
