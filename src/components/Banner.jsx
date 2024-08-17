import React from "react";

function Banner() {
  return (
    <div
      className="h-[20vh] md:h-[80vh] bg-cover flex items-end"
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg)",
      }}
    >
      <div className="text-white w-full text-xl text-center bg-gray-800/60 p-3">Avengers End Game</div>
    </div>
  );
}

export default Banner;
