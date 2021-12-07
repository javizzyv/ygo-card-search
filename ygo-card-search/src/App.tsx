import './App.css';
import { CardContainer } from './containers/CardContainer';
// import {Search} from './features/searchBar/SearchBar';

function App(): JSX.Element {

  return (
    <div className="App">
      {/* <Search>

      </Search> */}
      <CardContainer></CardContainer>
    </div>
  );
}

export default App;