import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header, Footer } from './components/index'
import { About, Contact, Events, Home } from './pages/index'
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/events" component={Events} /> 
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
