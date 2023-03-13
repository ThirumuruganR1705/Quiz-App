import React from "react";
import img from "../images/sports.png";
import gk from "../images/sports.png";
import axios from "axios";
import { useContext } from "react";
import quesnContext from "../ContextPage/Context";
import { useNavigate } from "react-router-dom";

function Content(props) {
  let value = useContext(quesnContext);

  let [changer, setChanger] = value;

  let quiz = async (e) => {
    e.preventDefault();
    let arr = e.target.id.split(" ");
    console.log(arr[1]);
    let response = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=${arr[1]}&difficulty=${arr[0]}&type=multiple`
    );
    setChanger({ shower: "two", ques: response, tot:changer.tot,correct:changer.correct });
    }
  return (
    <React.StrictMode>
      <div className="main h-2/3 bg-white rounded-t-3xl w-screen">
        <div className="content pt-10 mx-5">
          <p className="text-md text-gray-400">Recommended:</p>
          <div className="qq px-5 py-2 h-auto rounded-md border-2 shadow-inner md:hidden ">
            <div className="flex item items-center">
              <div className="img flex-1">
                <img src={img} className="h-10 " alt="React"/>
              </div>
              <div className=" dec flex-1">
                <p className="flex-1 text-md text-blue-400 font-bold">Sports</p>
                <div className="flex-1 qsize flex items-center">
                  <span>
                    <i className="fa-solid fa-clipboard-list text-gray-500 flex-1 pr-1"></i>
                  </span>
                  <p className="text-sm flex-1">10 Questions</p>
                </div>
                <div className="flex-1 duration flex items-center">
                  <span>
                    <i className="fa-solid fa-hourglass-start text-gray-500 flex-1 pr-1"></i>
                  </span>
                  <p className="text-sm flex-1">30 Mins</p>
                </div>
                <div className="button flex ">
                  <a
                    id="easy 21"
                    onClick={quiz}
                    // href="/quiz1"
                    className="bg-white text-blue-400 px-2 rounded-sm border-2 border-blue-400"
                  >
                    Start Quiz
                  </a>
                </div>
              </div>
              <div className="ratings flex items-center  invisible md:visible">
                <span>
                  <i className="fa-solid fa-star text-yellow-400 flex-1 pr-1"></i>
                </span>
                <p className="text-sm flex-1">4.3</p>
              </div>
            </div>
          </div>

          {/* item 2 */}

          <div className="qq px-5 py-2 h-auto rounded-md border-2 shadow-inner mt-5 md:hidden">
            <div className="flex item items-center">
              <div className="img flex-1">
                <img src={img} className="h-10 " alt="React" srcset="" />
              </div>
              <div className=" dec flex-1">
                <p className="flex-1 text-md text-blue-400 font-bold">General Knowledge</p>
                <div className="flex-1 qsize flex">
                  <span>
                    <i className="fa-solid fa-clipboard-list text-gray-500 flex-1 pr-1"></i>
                  </span>
                  <p className="text-sm flex-1">10 Questions</p>
                </div>
                <div className="flex-1 duration flex">
                  <span>
                    <i className="fa-solid fa-hourglass-start text-gray-500 flex-1 pr-1"></i>
                  </span>
                  <p className="text-sm flex-1">30 Mins</p>
                </div>
                <div className="button flex ">
                  <button onClick={quiz} id="easy 9" className="text-blue-400 border-2 border-blue-400 bg-white px-2 rounded-sm ">
                    Start Quiz
                  </button>
                </div>
              </div>
              <div className="ratings flex items-center  invisible md:visible">
                <span>
                  <i className="fa-solid fa-star text-yellow-400 flex-1 pr-1"></i>
                </span>
                <p className="text-sm flex-1">4.3</p>
              </div>
            </div>
          </div>
        </div>

        {/* For Larger DIsplays */}

        <div className="item1 grid grid-col-3 grid-flow-col gap-1  m-10 shadow-inner h-50  rounded-lg py-5 px-10 hidden md:grid">
          <div className="img flex items-center">
            <img src={img} className="h-20" alt="" />
          </div>

          <div className="desc  ">
            <span className="flex justify-start">
              <p className="flex-1 text-lg text-blue-400 font-bold">Sports</p>
            </span>
            <span className="flex">
              <p className="text-sm">Difficulty Level:</p>
              <p className="text-md pl-2 text-blue-400 flex items-center h-full">
                Easy
              </p>
            </span>
            <div className="flex-1 qsize flex">
              <span>
                <i className="fa-solid fa-clipboard-list text-gray-500 flex-1 pr-1"></i>
              </span>
              <p className="text-sm flex-1">10 Questions</p>
            </div>
            <div className="flex-1 duration flex">
              <span>
                <i className="fa-solid fa-hourglass-start text-gray-500 flex-1 pr-1"></i>
              </span>
              <p className="text-sm flex-1">30 Mins</p>
            </div>
          </div>
          <div className="start flex items-center">
            <a
              onClick={quiz}
              id="easy 21"
              // href="/quiz1"
              className="bg-white border-blue-400 border-2 cursor-pointer duration-500 text-blue-400 px-2 py-1 rounded-md hover:bg-blue-400 hover:text-white"
            >
              Start Quiz
            </a>
          </div>
          <div className="ratings flex items-center">
            <span>
              <i className="fa-solid fa-star text-yellow-400 flex-1 pr-1"></i>
            </span>
            <p className="text-sm flex-1">4.3</p>
          </div>
        </div>

        <div className="item1 grid grid-col-3 grid-flow-col gap-1  m-10 shadow-inner h-50  rounded-lg py-5 px-10 hidden md:grid">
          <div className="img flex items-center">
            <img src={gk} className="h-20" alt="" />
          </div>

          <div className="desc  ">
            <span className="flex justify-start">
              <p className="flex-1 text-lg text-blue-400 font-bold">
                General Knowledge
              </p>
            </span>
            <span className="flex">
              <p className="text-sm">Difficulty Level:</p>
              <p className="text-md pl-2 text-blue-400 flex items-center h-full">
                Easy
              </p>
            </span>
            <div className="flex-1 qsize flex">
              <span>
                <i className="fa-solid fa-clipboard-list text-gray-500 flex-1 pr-1"></i>
              </span>
              <p className="text-sm flex-1">10 Questions</p>
            </div>
            <div className="flex-1 duration flex">
              <span>
                <i className="fa-solid fa-hourglass-start text-gray-500 flex-1 pr-1"></i>
              </span>
              <p className="text-sm flex-1">30 Mins</p>
            </div>
          </div>
          <div className="start flex items-center">
            <a
              id="easy 9"
              onClick={quiz}
              // href="/quiz1"
              className="bg-white cursor-pointer ease-in-out duration-500 text-blue-400 px-2 py-1 rounded-md border-2 border-blue-400 hover:text-white hover:bg-blue-400"
            >
              Start Quiz
            </a>
          </div>
          <div className="ratings flex items-center">
            <span>
              <i className="fa-solid fa-star text-yellow-400 flex-1 pr-1"></i>
            </span>
            <p className="text-sm flex-1">4.3</p>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default Content;
