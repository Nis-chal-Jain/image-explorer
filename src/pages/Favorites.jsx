import React, { useState } from "react";
import NavMenu from "./../components/NavMenu";

function Favorites() {
  const [fav, setFav] = useState(JSON.parse(localStorage.getItem("fav")));
  return (
    <>
      <NavMenu />
      <div className=" text-5xl">Favorites</div>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 p-4 m-auto">
        {fav.map(function (data) {
          return (
            <img src={data} alt="" className="rounded-md mx-auto" />
          )
        })}
      </div>

    </>
  );
}

export default Favorites;
