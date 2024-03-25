import React, { useState, useEffect } from 'react'
import HeroCard from './Card/HeroCard';
import PickerList from '../components/Filter/PickerList';

const Location = () => {
    let [id, setID] = useState(1);
    let [info, setInfo] = useState([]);
    let { name, type, dimension } = info;
    let [results, setResults] = useState([]);
    let api = `https://rickandmortyapi.com/api/location/${id}`;

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then(res => res.json())
            setInfo(data)

            let a = await Promise.all(data.residents.map((x) => {
                return fetch(x).then(res => res.json())
            }));
            setResults(a);
        })()
    }, [api])
    return (
        <div className='container'>
            <div className='row'>
                <h1 className='text-center mb-3'> Location: <span style={{ color: 'orange' }}>{name == "" ? "???" : name}</span></h1>
                <h5 className='text-center'> Dimension: {dimension == "" ? "???" : dimension}</h5>
                <h6 className='text-center'> Type: <span style={{ color: "orange" }}>{type == "" ? "???" : type}</span></h6>
            </div>
            <div className='row'>
                <PickerList name="Location" changeID={setID} total={126} />
            </div>
            <div className='row'>
                <div className="col-lg-12  col-12">
                    <div className="row">
                        <HeroCard page="/location/" results={results} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location
