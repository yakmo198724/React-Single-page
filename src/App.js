import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp'
import { Navbar, Footer } from './component';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      <Switch>
        <Route path='/Services' exact component={Services} />
      </Switch>
      <Footer />
      <Switch>
        <Route path='/Products' exact component={Products} />
      </Switch>
      <Switch>
        <Route path='/Sign-up' exact component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
