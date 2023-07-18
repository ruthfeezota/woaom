import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';
import Home from './pages/Home';
import { useStateValue } from './StateProvider';
import { auth } from './firebase/firebase';
import Navbar from './components/Navbar';
import Login from './components/Login'
import Footer from './components/Footer';
import Work from './components/Work';
import SearchPage from './components/SearchPage';
import ChatRoom from './pages/ChatRoom';
import AboutUsBanner from './components/AboutUsBanner';
import LoginGoogle from './components/LoginGoogle';
import Profile from './components/Profile';

import Navigation from "./components/Navigation/Nav";
import Products from "./components/Products/Products";
import products from "./components/db/data";
import Recommended from "./components/Recommended/Recommended";
import Sidebar from "./components/Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";



function App() {
  const [{ user }, dispatch] = useStateValue();
  const [selectedCategory, setSelectedCategory] = useState(null);

   // ----------- Input Filter -----------
   const [query, setQuery] = useState("");

   const handleInputChange = (event) => {
     setQuery(event.target.value);
   };
 
   const filteredItems = products.filter(
     (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
   );

   // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }


    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }


  const result = filteredData(products, selectedCategory, query);

  

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

          <Route path='/products'>
            <Sidebar handleChange={handleChange}/>
            <Navigation query={query} handleInputChange={handleInputChange}/>
            <Recommended handleClick={handleClick}/>
            <Products result={result} />
          </Route>

          <Route path='/profile'>
          <Navbar />
            <Profile/>
            <Footer />
          </Route>

          <Route path='/google'>
            <LoginGoogle/>
          </Route>

          <Route path='/searchpage'>
            <SearchPage/>
          </Route>

          <Route path='/chat'>
            <ChatRoom/>
          </Route>


          {/* This is the default route */}
          <Route path='/'>
            <Navbar />
            <Home /> 
            <AboutUsBanner/>
            <Work/>
            <Footer/>
          </Route>
          



        </Switch>
      </div>
    </Router>
  );
}

export default App;
