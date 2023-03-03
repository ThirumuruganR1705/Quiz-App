import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import quesnContext from "../ContextPage/Context";

function Quiz1() {
  let [index, setIndex] = useState(0);
  let [time, setTime] = useState(10);
  let value = useContext(quesnContext);
  let [changer, setChanger] = value;
  let [score, setScore] = useState(0);
  let [flag, setFlag] = useState(true);
  let [options, setOptions] = useState([]);
  useEffect(() => {
    if (index < 1) {
      let newArr = [];
      newArr.push(changer.ques["data"]["results"][0].incorrect_answers[0]);
      newArr.push(changer.ques["data"]["results"][0].incorrect_answers[1]);
      newArr.push(changer.ques["data"]["results"][0].incorrect_answers[2]);
      newArr.push(changer.ques["data"]["results"][0].correct_answer);
      // newArr.sort();
      setOptions(newArr);
    }

  },[index,changer.ques]);

  let pageChanger=(e)=>{

    setChanger({shower:"one",ques:changer.ques,tot:changer.tot+1,correct:changer.correct+score});
  }
  
  let myvar = "text-center bg-gray-200 mb-1 cursor-pointer";

  let Qchanger = () => {
    document.body.children[1].children[0].children[0].children[0].children[1].children[1].children[0].className =
      myvar;
    document.body.children[1].children[0].children[0].children[0].children[1].children[1].children[1].className =
      myvar;
    document.body.children[1].children[0].children[0].children[0].children[1].children[1].children[2].className =
      myvar;
    document.body.children[1].children[0].children[0].children[0].children[1].children[1].children[3].className =
      myvar;
    if (index < 10) {
      setIndex(index + 1);
      while (options.length > 0) {
        options.pop();
      }
      console.log(options);
      let newArr = [];
      newArr.push(
        changer.ques["data"]["results"][index + 1].incorrect_answers[0]
      );
      newArr.push(
        changer.ques["data"]["results"][index + 1].incorrect_answers[1]
      );
      newArr.push(
        changer.ques["data"]["results"][index + 1].incorrect_answers[2]
      );
      newArr.push(changer.ques["data"]["results"][index + 1].correct_answer);
      // console.log(newArr);
      newArr.sort();
      // console.log(newArr);
      setOptions(newArr);
      setFlag(true);
    }
  };

  let correction = (e) => {
    if (flag) {
      if (
        changer.ques["data"]["results"][index].correct_answer ===
        e.target.innerText
      ) {
        e.target.className = e.target.className + " bg-green-300";
        setScore(score + 1);
      } else {
        e.target.className = e.target.className + " bg-red-300";
      }
      setFlag(false);
    }
  };

  return (
    <React.StrictMode>
      <div className="main h-full w-full justify-center flex items-center ">
        {index < 10 && (
          <div className="content lg:h-auto lg:w-1/3 bg-white flex-col p-5 divide-y divide-gray-500 rounded-xl">
            <div className="timeClose flex justify-between h-1/8">
              <div className="timer">
                <p className="text-lg font-bold text-gray-400">{time}</p>
              </div>
            </div>
            <div className="questionPart pt-2">
              <div className="question h-1/4">
                <p className="text-lg font-bold text-center">
                  {eval(index) + 1}.
                  {changer.ques["data"]["results"][index].question}
                </p>
              </div>
              <div className="options h-1/2">
                <p
                  className="text-center bg-gray-200 mb-1 cursor-pointer"
                  onClick={correction}
                >
                  {options[0]}
                </p>
                <p
                  className="text-center bg-gray-200 mb-1 cursor-pointer"
                  onClick={correction}
                >
                  {options[1]}
                </p>
                <p
                  className="text-center bg-gray-200 mb-1 cursor-pointer"
                  onClick={correction}
                >
                  {options[2]}
                </p>
                <p
                  className="text-center bg-gray-200 mb-1 cursor-pointer"
                  onClick={correction}
                >
                  {options[3]}
                </p>
              </div>
              <div className="btn flex justify-end h-1/8">
                <button
                  onClick={Qchanger}
                  className="bg-blue-400 px-2 py-1 duration-500 rounded-md hover:scale-110 text-white"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
        {index > 9 && (
          <div>
            <p className="text-sm text-center text-white">Your Score</p>
            <p className="text-8xl text-white text-center font-extrabold">
              {score}
            </p>
            <div className="closer flex justify-center">
              <a className="text-center" onClick={pageChanger}>
                <i class="fa-solid fa-circle-arrow-left text-white text-3xl text-center"></i>
              </a>
            </div>
          </div>
        )}
      </div>
    </React.StrictMode>
  );
}

export default Quiz1;
