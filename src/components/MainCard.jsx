import { Button } from "../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../components/ui/card";
import { useEffect, useState } from "react";

function MainCard({ curr, imgurl, namelink, name, about, nextFunc, prevFunc }) {
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
