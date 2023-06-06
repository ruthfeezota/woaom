import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from './components/Header'
import Home from './pages/Home';
import Checkout from './components/Checkout'
import Login from './components/Login'
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import FactoryPage from './components/FactoryPage';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import './App.css';
import { useStateContext } from './contexts/ContextProvider';

function App() {
  const [{user}, dispatch] = useStateValue();

  //useEffect <<<<<<< POWERFUL
  //Piece of code which runs based on a given condition

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in.....

        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        //the user is logged out....
        dispatch({
          type:"SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //Any cleanup operations go in here....
      unsuscribe();
    };
  }, []);

  console.log("USER IS >>>> ",user);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
    
    <Router>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
        <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
            </div>
            {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
          <div className="app">
            <Switch>
              <Route path="/checkout">
                <Header></Header>
                <Checkout></Checkout>
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/factorypage">
                <FactoryPage />
              </Route>
              <Route path="/">
                <Header />
                <Home />
              </Route>
            </Switch>
          </div> 
      </div>
      </div>
    </Router>
    </div>
    

  );
}

export default App;