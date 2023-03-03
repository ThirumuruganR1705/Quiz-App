import React from 'react';
import Categories from '../Components/Categories';
import Header from '../Components/Header';

function CategoryPage() {
    return ( 
        <React.StrictMode>
            <Header/>
            <Categories/>
        </React.StrictMode>
     );
}

export default CategoryPage;