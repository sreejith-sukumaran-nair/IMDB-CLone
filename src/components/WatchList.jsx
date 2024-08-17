import React, { useEffect, useState } from "react";
import genreIds from "../utility/genre";

function WatchList({ watchlist, handleRemoveFromWatchList }) {
  let [filteredProducts, setFilteredProducts] = useState(watchlist);
  let [genreList, setGenreList] = useState(["All Genres"]);
  const [currentGenres,setCurrentGenres] = useState("All Genres");

  const handleFilter = (genre) => {
    setCurrentGenres(genre);
  }

  let [search, setSearch] = useState("");
  console.log(watchlist);

  const sortAscend = () => {
    let sortedArray = [...filteredProducts].sort(
      (a, b) => a.vote_average - b.vote_average
    );
    setFilteredProducts(sortedArray);
    console.log(sortedArray);
  };

  const sortDescend = () => {
    let sortedArray = [...filteredProducts].sort(
      (a, b) => b.vote_average - a.vote_average
    );
    setFilteredProducts(sortedArray);
    console.log(sortedArray);
  };

  useEffect(() => {
    let searchedArray = watchlist.filter((movie) =>
      movie.original_title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(searchedArray);
  }, [search, watchlist]);

  useEffect(() => {
    let temp = filteredProducts.map((movie) => {
      return genreIds[movie.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
    console.log("temp", temp);
  }, [filteredProducts, watchlist]);

  

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        { genreList.map((genre,i) => 
          <div onClick={() => handleFilter(genre)} key={i} className={currentGenres==genre ?`bg-blue-400 flex justify-center items-center rounded-lg h-[2rem] w-[7rem] text-white font-bold mx-2` : `bg-gray-300 flex justify-center items-center rounded-lg h-[2rem] w-[7rem] text-white font-bold mx-2 ` }>
            {genre}
          </div>
        )  }
      </div>
      <div className="flex justify-center my-4">
        <input
          placeholder="Search movies..."
          className="bg-gray-200 h-[3rem] w-[18rem] px-3 rounded-md"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2 bg-gray-50">
            <tr>
              <th>Name</th>

              <th className="flex gap-3 justify-center">
                <div onClick={sortAscend}>
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
                Rating
                <div onClick={sortDescend}>
                  <i class="fa-solid fa-arrow-down"></i>
                </div>
              </th>

              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length ? ( 
              (currentGenres == "All Genres" ? filteredProducts :
              filteredProducts.filter( (movie) => genreIds[movie.genre_ids[0]] == currentGenres)).map((movie) => (
                <tr className="border-b-2">
                  <td className="flex items-center p-2">
                    <img
                      style={{ width: "80px" }}
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      alt="movie thumbnail"
                    />
                    <div className="mx-10">{movie.original_title}</div>
                  </td>
                  <td>{movie.vote_average}</td>
                  <td>{movie.popularity}</td>
                  <td>{genreIds[movie.genre_ids[0]]}</td>
                  <td
                    onClick={() => handleRemoveFromWatchList(movie)}
                    className="text-red-800"
                  >
                    Delete
                  </td>
                </tr>
              ))
            ) : (
              <div className="flex items-center justify-center">
                <h5 className="m-5 p-5 my-auto">
                  There is no movies in your watch list...
                </h5>
              </div>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
