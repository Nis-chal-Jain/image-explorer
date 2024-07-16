import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [imgurlarr, setimgurlarr] = useState([])
  const [curr, setcurr] = useState(0)
  const [imgurl, setimgurl] = useState("");
  const [name, setname] = useState("");
  const [namelink, setnamelink] = useState("");
  const unsplashAPIKey = import.meta.env.VITE_UNSPLASH_API_KEY;
  const [rand, setRand] = useState("");
  const [about, setabout] = useState("");
  const randRequesturl = `https://api.unsplash.com/photos/random?client_id=${unsplashAPIKey}&query=${rand}`;

  useEffect(() => {
    img();
  },[]);
  useEffect(() => {
    if (imgurlarr.length > 0) {
      updateimg()
    }
  }, [imgurlarr]);

  function changecur() {
    setcurr((curr) => (curr + 1))
    console.log(curr)
    console.log(imgurlarr)
    if(!imgurlarr[curr+1]){
      img()
    }
    updateimg()
  }
  function prevcurr(){
    if(curr>=0){
      setcurr((curr) => (curr - 1))
      updateimg()
    }
    
  }
  async function img() {
    const data = await fetch(randRequesturl);
    const dataJSON = await data.json();
    setimgurlarr((prevImgUrlArr) => [...prevImgUrlArr, dataJSON]);
    console.log(imgurlarr)
  }
  function updateimg(){
    setimgurl(imgurlarr[curr].urls.raw);
      setname(imgurlarr[curr].user.name);
      setnamelink(imgurlarr[curr].user.links.html);
      setabout(imgurlarr[curr].alt_description);
  }
  async function search(){
    await img()
    setcurr(imgurlarr.length)
  }

  return (
    <>
      <div className="body  flex justify-center items-center flex-col  max-h-screen">
        <div className="main h-screen shadow-2xl">
          <div className="flex flex-row gap-2 items-center justify-center">
            <div className="search border-2 border-black m-2">
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
                onClick={search}
                className=" bg-black text-white h-fit border-4 border-black cursor-pointer"
              />
            </div>
          </div>

          <div className="flex flex-row">
          <div className="another px-2   border-none h-[86vh] flex items-center">
              <input
                type="button"
                value="Prev"
                onClick={prevcurr}
                className=" text-2xl cursor-pointer "
              />
            </div>
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
                onClick={changecur}
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
