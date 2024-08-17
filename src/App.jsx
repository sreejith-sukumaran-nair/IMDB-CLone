import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";
import Movies from "./components/Movies";
import Banner from "./components/Banner";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [watchlist, setWatchlist] = useState([]);
  
  let handleAddToWatchList = (movie) => {
      let newWatchlist = [...watchlist,movie];
      localStorage.setItem('movieApp',JSON.stringify(newWatchlist))
      setWatchlist(newWatchlist);  
      console.log(newWatchlist)
  }
 
  let handleRemoveFromWatchList = (movie) => {
    let filteredWatchList = watchlist.filter( (m) => m.id !== movie.id );
    localStorage.setItem('movieApp',JSON.stringify(filteredWatchList))
    setWatchlist(filteredWatchList);
    console.log(filteredWatchList)
  }

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem('movieApp');
    if(!moviesFromLocalStorage){
      return
    }
    setWatchlist(JSON.parse(moviesFromLocalStorage))
  },[])
  const URL = "https://api.themoviedb.org/3/movie/popular?api_key=0bc1378bc1fa3c038f1e984675166c48&language=en-US&page=1"

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies watchlist={watchlist}  handleAddToWatchList={handleAddToWatchList} handleRemoveFromWatchList = {handleRemoveFromWatchList} />
              </>
            }
          />
          <Route path="/watchlist" element={<WatchList  watchlist={watchlist}  handleRemoveFromWatchList = {handleRemoveFromWatchList} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
