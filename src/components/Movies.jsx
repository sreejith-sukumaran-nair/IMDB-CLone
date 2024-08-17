import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination'

function Movies({handleAddToWatchList,handleRemoveFromWatchList,watchlist}) {
  const [movies,setMovies] = useState([])
  const [page,setPage] = useState(1);
  const plusPage = () => {
    setPage(page+1)
  }
  const minusPage = () => {
    if(page>1){
      setPage(page-1)
    }
  }
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0bc1378bc1fa3c038f1e984675166c48&language=en-US&page=${page}`).then((res)=> setMovies(res.data.results)).catch((err)=> console.log(err))
  },[page])
  return (
    <div className='p-4'>
      <div className='text-2xl text-center p-3'>
        Trending Movies
      </div>
      <div className='flex flex-wrap justify-around gap-3'>
        {movies.map((movie , index)=> <MovieCard key={movie.id} watchlist={watchlist}  handleAddToWatchList = {handleAddToWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}  movie={movie} index ={index}/>)}
      </div> 
      <Pagination minusPage={minusPage} plusPage={plusPage} page={page} setPage={setPage}/>
    </div>
  )
}

export default Movies;