import React from "react";

function Pagination({ minusPage, plusPage, page ,setPage }) {
  return (
    <div className="bg-gray-400 my-3 text-center p-2 flex justify-center items-center gap-3 font-bold">
      {page > 5 ? <a className="hover:cursor-pointer" onClick={(e) => setPage(1)}>First page</a> : null}
      <i onClick={minusPage} className="fa-solid fa-arrow-left hover:cursor-pointer px-8"></i>
      {page}
      <i onClick={plusPage} className="fa-solid fa-arrow-right hover:cursor-pointer px-8"></i>
    </div>
  );
}

export default Pagination;
