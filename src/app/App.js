import { FilterStatus } from '../features/filterStatus/FilterStatus';
import { Issues } from '../features/issues/Issues';
import './App.css';

const App = () => {

  return (
    <>
      <FilterStatus />  
      <Issues />
    </>
  );
}

export default App;