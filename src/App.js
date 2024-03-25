
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import HeroCard from "./Pages/Card/HeroCard";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episode from "./Pages/Episode";
import Location from "./Pages/Location";
import './App.css'
import CardInfo from "./Pages/Card/HeroCardInfo";


function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<CardInfo />} />

                <Route path="/location" element={<Location />} />
                <Route path="/location/:id" element={<CardInfo />} />

                <Route path="/episode" element={<Episode />} />
                <Route path="/episode/:id" element={<CardInfo />} />
            </Routes>
        </Router>
    );
}

const Home = () => {
    let [pageNumber, updatePageNumber] = useState(1);
    let [gender, updateGender] = useState("");
    let [species, updateSpecies] = useState("");
    let [status, updateStatus] = useState("");
    let [search, setSearch] = useState("");

    let [fetchedData, updateFetchData] = useState([]);
    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

    let { info, results } = fetchedData

    useEffect(() => {

        (async function () {
            let data = await fetch(api).then(res => res.json())
            updateFetchData(data)
        })()

    }, [api])

    return (
        <div className="App">
            <h1 className="text-center mb-3">Heroes</h1>
            <div className="container">
                <Filter
                    pageNumber={pageNumber}
                    status={status}
                    updateStatus={updateStatus}
                    updateGender={updateGender}
                    updateSpecies={updateSpecies}
                    updatePageNumber={updatePageNumber}
                />
                <SearchBar updatePageNumber={updatePageNumber} setSearch={setSearch} />
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <HeroCard page="/" results={results} />
                        </div>
                    </div>
                </div>

            </div>
            <Pagination info={info} pageNumber={pageNumber} updatePageNumber={updatePageNumber} />
        </div>
    );
}

export default App;
