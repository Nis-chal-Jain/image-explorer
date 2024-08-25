import { useEffect, useState } from "react";
import NavMenu from "./../components/NavMenu";
import MainCard from "./../components/MainCard";
import loading from "./../assets/loading.gif";

function App() {
  const [imgurlarr, setimgurlarr] = useState([]);
  const [curr, setcurr] = useState(0);
  const [imgurl, setimgurl] = useState(loading);
  const [name, setname] = useState("");
  const [namelink, setnamelink] = useState("");
  const unsplashAPIKey = import.meta.env.VITE_UNSPLASH_API_KEY;
  const [rand, setRand] = useState("");
  const [about, setabout] = useState("");
  const randRequesturl = `https://api.unsplash.com/photos/random?client_id=${unsplashAPIKey}&query=${rand}`;

  useEffect(() => {
    img();
  }, []);
  useEffect(() => {
    if (imgurlarr.length > curr) {
      updateimg();
    }
  }, [imgurlarr, curr]);

  async function changecur() {
    setcurr((curr) => curr + 1);
    console.log(curr);
    console.log(imgurlarr);
    if (!imgurlarr[curr + 1]) {
      setimgurl(loading);
      await img();
    }
    setimgurl(loading);
  }
  function prevcurr() {
    if (curr >= 0) {
      setcurr((curr) => curr - 1);
    }
  }
  async function img() {
    const data = await fetch(randRequesturl);
    const dataJSON = await data.json();
    setimgurlarr((prevImgUrlArr) => [...prevImgUrlArr, dataJSON]);
    console.log(imgurlarr);
  }
  function updateimg() {
    setimgurl(imgurlarr[curr].urls.raw);
    setname(imgurlarr[curr].user.name);
    setnamelink(imgurlarr[curr].user.links.html);
    setabout(imgurlarr[curr].alt_description);
  }
  async function search() {
    await img();
    setcurr(imgurlarr.length);
  }
  function addtobrowser() {
    if (!localStorage.getItem("fav")) {
      localStorage.setItem("fav", JSON.stringify([]));
    }
    let localarr = localStorage.getItem("fav");
    localarr = JSON.parse(localarr)
    localarr = [...localarr,imgurl]
    localStorage.setItem("fav", JSON.stringify(localarr));
  }

  return (
    <>
      <NavMenu search={search} setRand={setRand} />
      <div className="flex justify-center items-center flex-col">
        <MainCard
          about={about}
          name={name}
          namelink={namelink}
          imgurl={imgurl}
          nextFunc={changecur}
          prevFunc={prevcurr}
          search={search}
          setRand={setRand}
          curr={curr}
          addtobrowser={addtobrowser}
        />
      </div>
    </>
  );
}

export default App;
