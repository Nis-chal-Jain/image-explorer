import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
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

  async function img() {
    const data = await fetch(randRequesturl);
    const dataJSON = await data.json();
    setimgurl(dataJSON.urls.raw);
    setname(dataJSON.user.name);
    setnamelink(dataJSON.user.links.html);
    setabout(dataJSON.alt_description);
    console.log(imgurl);
    console.log(name);
    console.log(namelink);
    console.log(rand);
  }

  return (
    <>
      <div className="body  flex justify-center items-center flex-col  max-h-screen">
        <div className="main h-screen shadow-2xl">
          <div className="flex flex-row gap-2 items-center">
            <div className="search border-2 border-black ">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="search"
                className=" border-none h-fit"
                onChange={(event) => setRand(event.target.value)}
              />
              <input
                type="button"
                value="Submit"
                onClick={img}
                className=" bg-black text-white h-fit border-4 border-black cursor-pointer"
              />
            </div>
          </div>

          <div className="flex flex-row">
            <div className="mainimg">
              <img src={imgurl} alt="" className=" h-[85vh] shadow-2xl" />
              <p className="">
                Photo by{" "}
                <a href={namelink} className=" text-blue-500">
                  {name}
                </a>{" "}
                on unsplash
              </p>
              <p>{about}</p>
            </div>
            <div className="another px-2   border-none h-[86vh] flex items-center">
              <input
                type="button"
                value="Next"
                onClick={img}
                className=" text-2xl cursor-pointer "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
