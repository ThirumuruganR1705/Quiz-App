import React from "react";
import CategoriesList from "../Categories/CategoriesList";
import axios from "axios";
import { useContext } from "react";
import quesnContext from "../ContextPage/Context";

function Categories() {
  let value = useContext(quesnContext);
  let [changer, setChanger] = value;

  let quiz = async (e) => {
    let category = e.target.id;
    let response = await axios.get(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=easy&type=multiple`
    );
    setChanger({
      shower: "two",
      ques: response,
      tot: changer.tot,
      correct: changer.correct,
    });
  };

  return (
    <React.StrictMode>
      <div className="h-2/3 bg-white rounded-t-3xl">
        <p className="text-xl font-bold text-center pt-10 text-blue-500 overflow-auto">
          Quiz Categories
        </p>
        <div className=" px-10 sm:grid-col-2  grid md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-5 text-center gap-x-40 gap-y-4 pt-10 md:scrollover-auto">
          {CategoriesList.map((res) => (
            <div className={res.id}>
              <div value={res.id}>
                <p
                  onClick={quiz}
                  className="flex shadow-md md:shadow-inner rounded-2xl flex-col cursor-pointer text-blue-400 py-2   lg:hover:text-white lg:hover:bg-blue-400"
                  id={res.value}
                >
                  {res.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.StrictMode>
  );
}

export default Categories;
