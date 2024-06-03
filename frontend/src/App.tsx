import React from 'react';
import logo from './logo.svg';
import './App.css';
import IngredientList from "./Components/IngredientList/IngredientList"
import Search from './Components/Search/Search';

function App() {
  return (
    <div className="App">
        <IngredientList />
        <Search />
    </div>
  );
}

export default App;
