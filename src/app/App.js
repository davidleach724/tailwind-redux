import { FilterStatus } from '../features/filterStatus/FilterStatus';
import { Issues } from '../features/issues/Issues';

const App = () => {

  return (
    <div className="flex flex-col items-center" >
      <FilterStatus />  
      <Issues />
    </div>
  );
}

export default App;