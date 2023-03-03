import React from 'react';
import Content from './Components/Content';
import Header from './Components/Header';
import Quiz1 from './Pages/Quiz1';
import Categories from './Components/Categories';
import axios from 'axios';
import { useContext } from 'react';
import quesnContext from './ContextPage/Context';
import { useState } from 'react';
import Home from './Pages/Home';
import CategoryPage from './Pages/CategoryPage';
import DashboardPage from './Pages/DashboardPage';

function App() {

    let [quesn,setQuesn] = useState({});
    let [changer,setChanger] = useState({ques:{},tot:0,correct:0,shower:"one"});

    return ( 
        <quesnContext.Provider value={[changer,setChanger]}>
            <div className="main w-screen h-screen bg-blue-400  ">
                {changer.shower==="one" && <Home/>}
                {changer.shower==="two" && <Quiz1/>}
                {changer.shower==="three" && <CategoryPage/>}
                {changer.shower==="four" && <DashboardPage/>}
            </div>
        </quesnContext.Provider>
     );
}

export default App;