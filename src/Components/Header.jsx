import React from "react";
import $ from "jquery/dist/jquery.slim";
import { useContext } from "react";
import quesnContext from "../ContextPage/Context";
import { useState } from "react";

function Header() {
  let value = useContext(quesnContext);

  let [changer, setChanger] = value;

  let pageChanger = (e) => {
    setChanger({
      shower: e.target.id,
      ques: changer.ques,
      tot: changer.tot,
      correct: changer.correct,
    });
  };

  let menuShower = () => {
    $(".menu-items").show();
  };

  let menuCloser = () => {
    $(".menu-items").hide(1000);
  };

  return (
    <React.StrictMode>
      <div className="h-1/3 w-screen bg-blue-400">
        <div className="hidden menu-items w-4/5 h-full bg-blue-300 z-10 absolute ">
          <div className="closer flex justify-end">
            <p
              onClick={menuCloser}
              className="text-md  px-2  m-3 bg-red-400 text-white rounded-full"
            >
              X
            </p>
          </div>
          <ul className="text-white flex flex-col  items-center h-full w-full">
            <li className=" mt-4">
              <a className="cursor-pointer" id="one" onClick={pageChanger}>
                Home
              </a>
            </li>
            <li className=" mt-4">
              <a className="cursor-pointer" id="four" onClick={pageChanger}>
                Dashboard
              </a>
            </li>
            <li className=" mt-4">
              <a className="cursor-pointer" id="three" onClick={pageChanger}>
                Categories
              </a>
            </li>
            <li className=" mt-4">
              <a className="cursor-pointer">About</a>
            </li>
            <li className=" mt-4">
              <a className="cursor-pointer">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar flex p-10">
          <p className="text-3xl hidden md:block font-extrabold font-sans flex-1 text-white ">
            Quizer Kiddo
          </p>
          <div className="nav-items flex-1 ">
            <button onClick={menuShower} className="icon1 p-1 lg:hidden">
              <i className="fa-solid fa-bars text-white"></i>
            </button>

            <div className=" hidden lg:block">
              <ul className="flex justify-between items-center">
                <li className="flex-1 text-gray-200 hover:text-white">
                  <a
                    className={
                      changer.shower === "one"
                        ? "cursor-pointer text-white"
                        : "cursor-pointer"
                    }
                    id="one"
                    onClick={pageChanger}
                  >
                    Home
                  </a>
                </li>
                <li className="flex-1 text-gray-200 hover:text-white">
                  <a
                    className={
                      changer.shower === "four"
                        ? "cursor-pointer text-white"
                        : "cursor-pointer"
                    }
                    id="four"
                    onClick={pageChanger}
                  >
                    Dashboard
                  </a>
                </li>
                <li className="flex-1 text-gray-200 hover:text-white">
                  <a
                    className={
                      changer.shower === "three"
                        ? "cursor-pointer text-white"
                        : "cursor-pointer"
                    }
                    id="three"
                    onClick={pageChanger}
                  >
                    Categories
                  </a>
                </li>
                <li className="flex-1 text-gray-200 hover:text-white">
                  <a
                    className={
                      changer.shower === ""
                        ? "cursor-pointer text-white"
                        : "cursor-pointer"
                    }
                  >
                    About
                  </a>
                </li>
                <li className="flex-1 text-gray-200 hover:text-white">
                  <a
                    className={
                      changer.shower === "five"
                        ? "cursor-pointer text-white"
                        : "cursor-pointer"
                    }
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="account flex">
            <span className="h-auto icon rounded-full">
              <i className="fa-solid fa-user bg-gray-400 rounded-full p-2 text-white"></i>
            </span>
          </div>
        </div>

{/* Mobile Screen */}

        <div className="dashboard sm:hidden justify-between items-center">
          <div className="username pl-10">
            <p className="text-sm text-white">Hello Kiddo,</p>
            <p className="text-xl font-sans py-2 text-white font-bold">
              Let's Test Your Knowledge With Us ...
            </p>
          </div>
          <div
            className={
              changer.shower === "four"
                ? "dash w-full mr-10"
                : "dash w-1/2 mr-10 hidden lg:block "
            }
          >
          </div>
        </div>

{/* Large Screen */}

        <div className="dashboard hidden sm:flex justify-between items-center">
          <div className="username pl-10">
            <p className="text-sm text-white">Hello Kiddo,</p>
            <p className="text-xl font-sans py-2 text-white font-bold">
              Let's Test Your Knowledge With Us ...
            </p>
          </div>
          <div
            className={
              changer.shower === "four"
                ? "dash w-1/2 mr-10"
                : "dash w-1/2 mr-10 hidden lg:block "
            }
          >
            <div
              onClick={pageChanger}
              id="four"
              className="bg-white flex justify-between p-3 rounded-lg hover:scale-105 duration-500 cursor-pointer h-auto"
            >
              <p className="text-md">Dashboard</p>
              <div className="analysis">
                <div className="letters">
                  <p className="text-sm">Accuracy</p>
                  <p
                    className={
                      (changer.correct / (changer.tot * 10)) * 100 < 50
                        ? "text-lg text-red-400"
                        : "text-lg text-green-500"
                    }
                  >
                    {changer.tot === 0
                      ? 0
                      : Math.round(
                          (changer.correct / (changer.tot * 10)) * 100
                        )}
                    %
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </React.StrictMode>
  );
}

export default Header;
