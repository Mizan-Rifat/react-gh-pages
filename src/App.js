import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './About';
import Home from './Home';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
