import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../components/ui/card";

function MainCard({
  imgurl,
  namelink,
  name,
  about,
  nextFunc,
  prevFunc,
  search,
  setRand,
}) {
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
            className=" sm:h-[75vh] sm:w-auto w-screen"
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
        <Button onClick={prevFunc}>&lt;Prev</Button>
        <Button onClick={nextFunc}>Next&gt;</Button>
      </CardFooter>
    </Card>
  );
}

export default MainCard;
