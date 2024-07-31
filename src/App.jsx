import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import MainCard from "./components/MainCard";
import "./App.css";

function App() {
  const [imgurlarr, setimgurlarr] = useState([]);
  const [curr, setcurr] = useState(0);
  const [imgurl, setimgurl] = useState("");
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
    if (imgurlarr.length > 0) {
      updateimg();
    }
  }, [imgurlarr]);

  function changecur() {
    setcurr((curr) => curr + 1);
    console.log(curr);
    console.log(imgurlarr);
    if (!imgurlarr[curr + 1]) {
      img();
    }
    updateimg();
  }
  function prevcurr() {
    if (curr >= 0) {
      setcurr((curr) => curr - 1);
      updateimg();
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

  return (
    <>
      <div className="flex justify-center items-center flex-col max-h-screen">
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
        />
      </div>
    </>
  );
}

export default App;
