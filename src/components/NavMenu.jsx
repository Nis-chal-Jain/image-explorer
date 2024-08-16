import { Sheet, SheetTrigger, SheetContent } from "../../components/ui/sheet";
import { Button } from "../../components/ui/button";
import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import { Input } from "../../components/ui/input";

export default function Component({ setRand, search }) {
  const [heartcolor, setHeartColor] = React.useState("none");
  const [colcolor, setcolcolor] = React.useState(false);
  return (
    <header className="flex items-center justify-between bg-background px-4 py-3 shadow-sm sm:px-6">
      <div className="flex items-center gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="sm:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:hidden">
            <nav className="grid gap-4 p-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center gap-2 text-lg font-medium ${
                    isActive ? "text-black" : "text-gray-400"
                  }`
                }
                prefetch={false}
              >
                Home
              </NavLink>
              <NavLink
                to="/favorites"
                className={({ isActive }) =>
                  `flex items-center gap-2 text-lg font-medium ${
                    isActive
                      ? `${setHeartColor("red")}text-black`
                      : `${setHeartColor("none")}text-gray-400`
                  }`
                }
                prefetch={false}
              >
                <HeartIcon heartcolor={heartcolor} className="h-5 w-5" />
                Favorites
              </NavLink>
              <NavLink
                to="collection"
                className={({ isActive }) =>
                  `flex items-center gap-2 text-lg font-medium ${
                    isActive
                      ? `${setcolcolor(true)}text-black`
                      : `${setcolcolor(false)}text-gray-400`
                  }`
                }
                prefetch={false}
              >
                {colcolor ? (
                  <LayoutGridIconActive className="h-5 w-5" />
                ) : (
                  <LayoutGridIcon className="h-5 w-5" />
                )}
                Collection
              </NavLink>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      <div className="relative flex flex-1 md:left-24 sm:max-w-md">
        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full rounded-lg bg-background pl-8"
          onChange={(event) => setRand(event.target.value)}
        />
        <Button type="submit" onClick={search}>
          Search
        </Button>
      </div>
      <div className="hidden sm:flex items-center gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 text-lg font-medium my-auto ${
              isActive ? "text-black" : "text-gray-400"
            }`
          }
          prefetch={false}
        >
          Home
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            `flex items-center gap-2 text-lg font-medium ${
              isActive
                ? `${setHeartColor("red")}text-black`
                : `${setHeartColor("none")}text-gray-400`
            }`
          }
          prefetch={false}
        >
          <HeartIcon heartcolor={heartcolor} className="h-5 w-5" />
          Favorites
        </NavLink>
        <NavLink
          to="/collection"
          className={({ isActive }) =>
            `flex items-center gap-2 text-lg font-medium ${
              isActive
                ? `${setcolcolor(true)}text-black`
                : `${setcolcolor(false)}text-gray-400`
            }`
          }
          prefetch={false}
        >
          {colcolor ? (
            <LayoutGridIconActive className="h-5 w-5" />
          ) : (
            <LayoutGridIcon className="h-5 w-5" />
          )}
          Collection
        </NavLink>
      </div>
    </header>
  );
}

function HeartIcon({ props, heartcolor }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={heartcolor}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function LayoutGridIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="white"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  );
}
function LayoutGridIconActive(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="black"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
