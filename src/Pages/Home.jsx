import React from 'react';
import Header from '../Components/Header';
import Content from '../Components/Content';
import { useContext } from 'react';
import quesnContext from '../ContextPage/Context';
import { useState } from 'react';

function Home() {

    let value = useContext(quesnContext);
    let [changer,setChanger] = value;

    return ( 
        <React.StrictMode>
            <Header/>
            <Content/>
        </React.StrictMode>
     );
}

export default Home;