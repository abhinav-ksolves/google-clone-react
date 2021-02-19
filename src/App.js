import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import SearchResult from './components/SearchResult';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/search">
            <SearchResult />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
