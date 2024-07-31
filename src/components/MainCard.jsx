import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../components/ui/card";
import { useEffect, useState } from "react";

function MainCard({
  curr,
  imgurl,
  namelink,
  name,
  about,
  nextFunc,
  prevFunc,
  search,
  setRand,
}) {
  const [isdisabled,setdisabled]=useState(' ')
  useEffect(()=>{
    if(curr==0){
      setdisabled("disabled")
    }
    else{
      setdisabled("")
    }
  },[curr])
  return (
    <Card className="max-h-screen">
      <CardHeader>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            type="text"
            placeholder="Search"
            onChange={(event) => setRand(event.target.value)}
          />
          <Button type="submit" onClick={search}>
            Submit
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex justify-center">
        <div>
          <img
            src={imgurl}
            alt=""
            className=" sm:h-[75vh] sm:max-h-none sm:w-auto w-screen max-h-[70vh]"
          />
          <p className="">
            Photo by{" "}
            <a href={namelink} className=" text-blue-500">
              {name}
            </a>{" "}
            on unsplash
          </p>
          <p>{about}</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center gap-5">
        <Button disabled={isdisabled} onClick={prevFunc}>&lt;Prev</Button>
        <Button onClick={nextFunc}>Next&gt;</Button>
      </CardFooter>
    </Card>
  );
}

export default MainCard;
