import React from 'react';
import DashBoard from '../Components/Dashboard';
import Header from '../Components/Header';

function DashboardPage() {
    return ( 
        <React.StrictMode>
            <Header/>
            <DashBoard/>
        </React.StrictMode>
     );
}

export default DashboardPage;