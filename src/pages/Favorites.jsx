import React, { useState } from "react";
import NavMenu from "./../components/NavMenu";

function Favorites() {
  const [fav, setFav] = useState(localStorage.getItem("fav"));
  return (
    <>
      <NavMenu />
      <div className=" text-5xl">Favorites</div>
      <img src={fav} alt="" className="max-h-[40vh] m-auto" />
    </>
  );
}

export default Favorites;
