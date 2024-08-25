import { Button } from "../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../components/ui/card";
import { useEffect, useState } from "react";
import { HeartIcon, HeartFilledIcon } from "@radix-ui/react-icons";

function MainCard({
  curr,
  imgurl,
  namelink,
  name,
  about,
  nextFunc,
  prevFunc,
  addtobrowser,
}) {
  const [seed, setSeed] = useState(1);
  function reset(){
    setSeed(Math.random());
  }
  const [isdisabled, setdisabled] = useState(" ");

  useEffect(() => {
    if (curr == 0) {
      setdisabled("disabled");
    } else {
      setdisabled("");
    }
  }, [curr]);
  return (
    <Card className="max-h-[90vh]">
      <CardContent className="flex justify-center">
        <div>
          <img
            src={imgurl}
            alt=""
            className=" sm:h-[75vh] m-auto sm:w-auto w-screen max-h-[70vh] pt-2"
          />
          <button key={seed} onClick={()=>{addtobrowser();reset()}}>
            {localStorage.getItem("Favorites") == null ?
              <HeartIcon /> :
              localStorage.getItem("Favorites").includes(imgurl) ? (
                <HeartFilledIcon color="rgb(255,0,255)" />
              ) : (
                <HeartIcon />
              )}
          </button>
          <p>
            Photo by{" "}
            <a href={namelink} className=" text-blue-500">
              {name}
            </a>{" "}
            on unsplash
          </p>
          <p>{about}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center gap-5 pb-0">
        <Button disabled={isdisabled} onClick={prevFunc}>
          &lt;Prev
        </Button>
        <Button onClick={nextFunc}>Next&gt;</Button>
      </CardFooter>
    </Card>
  );
}

export default MainCard;
