import React from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Categories from './components/Categories/Categories';
import Products from './components/Products/Products';

import './app.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
}

export default App;