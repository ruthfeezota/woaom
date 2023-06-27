import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import { useStateValue } from './StateProvider';
import { auth } from './firebase/firebase';
import Navbar from './components/Navbar';
import Login from './components/Login'
import Footer from './components/Footer';
import Profile from './components/user/Profile';
import Work from './components/Work';


function App() {
  const [{ user }, dispatch] = useStateValue();

  /* useEffect <<<<<<< POWERFUL */
  /* Piece of code which runs based on a given condition */

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        /* the user is logged in..... */

        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        /* the user is logged out.... */
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });

    return () => {
      /* Any cleanup operations go in here.... */
      unsuscribe();
    };
  }, []);

  console.log('USER IS >>>> ', user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/checkout'>
            <Navbar />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/profile'>
            <Navbar />
            <Profile />
            <Footer />
          </Route>
          {/* This is the default route */}
          <Route path='/'>
            <Navbar />
            <Home /> 
            <Work/>
            <Footer/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
