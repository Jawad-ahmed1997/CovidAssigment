import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import React from 'react'
import Api from "../componetn/Api";
import SearchResult from "../componetn/SearchResult";

const RoutePractice=()=>{
    return (
        <div>
            <Router>
                <Link to='/Api'>Api</Link>
                <Link to='/SearchResult'>SearchReslut</Link>
                <h1>DashBord</h1>
                <Routes>
                    <Route > <Api path="/Api" /> </Route>
                    <Route > <SearchResult path="/SearchResult"/></Route>
                </Routes>
            </Router>


        </div>
    )
}

export default RoutePractice;
