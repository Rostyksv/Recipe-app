import './App.css';
import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'
import { MdFavorite } from 'react-icons/md'
import Recipes from './components/Recipes';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [dish, setDish] = useState('pizza');

  const changeDish = (e) => {
    setDish(e.target.value);
  }

  let url = `https://forkify-api.herokuapp.com/api/search?q=${dish}`;
  useEffect( () => {
    async function getData() {
      const res = await fetch(url);
      const datas = await res.json();
      setData(datas.recipes);
      setLoading(false);
    }
    getData();

  }, [dish])
  console.log(data);
  if(loading) {
    return (
      <div>Loading...</div>
    )
  }
  return (
    <Router>
    <div className="fullApp">
      <div className="header-container">
          <p>Recipe app</p>
      </div>
    <div className='App'>
      <Switch >
        <Route path="/" exact component={() => <Recipes changeDish={changeDish} data={data} setPage={setPage} page={page}/>}/>
      </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
