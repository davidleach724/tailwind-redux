import { useEffect, useState } from 'react';
import { fetchData } from '../apiCalls';
import { Counter } from '../features/counter/Counter';
import './App.css';

function App() {
  const [currentIssues, setCurrentIssues] = useState(null)

  // useEffect(() => {
  //   fetchData()
  //   .then(data => setCurrentIssues(data))
  //   .then(data => console.log(data))
  // })

  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Counter />
    </>
  );
}

export default App;
