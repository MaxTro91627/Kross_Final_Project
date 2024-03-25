import React, { useState, useEffect } from 'react'
import HeroCard from './Card/HeroCard';
import PickerList from '../components/Filter/PickerList';

const Episode = () => {
    let [id, setID] = useState(1);
    let [info, setInfo] = useState([]);
    let { air_date, name } = info;
    let [results, setResults] = useState([]);
    let api = `https://rickandmortyapi.com/api/episode/${id}`;

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then(res => res.json())
            setInfo(data)

            let a = await Promise.all(data.characters.map((x) => {
                return fetch(x).then(res => res.json())
            }));
            setResults(a);
        })()
    }, [api])
    return (
        <div className='container'>
            <div className='row'>
                <h1 className='text-center mb-3'> Episode: <span style={{ color: 'orange' }}>{name == "" ? "???" : name}</span></h1>
                <h5 className='text-center'> Air Date: {air_date == "" ? "???" : air_date}</h5>
            </div>
            <div className='row'>
                <PickerList name="Episode: " changeID={setID} total={51} />
            </div>
            <div className='row'>
                <div className="col-lg-12  col-12">
                    <div className="row">
                        <HeroCard page="/episode/" results={results} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Episode
