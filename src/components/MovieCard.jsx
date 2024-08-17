import React from "react";

function MovieCard({
  movie,
  index,
  handleAddToWatchList,
  handleRemoveFromWatchList,
  watchlist,
}) {
  const doesContain = (movie) => {
    return watchlist.some((m) => m.id == movie.id);
  };
  


 
  return (
    <div
      className="relative h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:cursor-pointer hover:scale-110 duration-300 my-2 flex items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
      }}
    >
      {doesContain(movie) ? (
        <div
          onClick={() => {
            handleRemoveFromWatchList(movie);
          }}
          title="Add to watchlist"
          className="m-1 absolute top-2 right-2 bg-gray-800/60 p-1 rounded-md"
        >
          &#10006;
        </div>
      ) : (
        <div
          onClick={() => {
            handleAddToWatchList(movie);
          }}
          title="Add to watchlist"
          className="m-1 absolute top-2 right-2 bg-gray-800/60 p-1 rounded-md"
        >
          &#128525;
        </div>
      )}

      <div className="text-center flex justify-center bg-gray-800/80 text-white w-full rounded-b-xl">
        {movie.original_title}
      </div>
    </div>
  );
}

export default MovieCard;
