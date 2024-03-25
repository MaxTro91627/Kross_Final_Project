import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const CardInfo = () => {
    let { id } = useParams()
    let [fetchedData, updateFetchedData] = useState([]);
    let { name, location, origin, gender, image, status, species, type } = fetchedData;
    let api = `https://rickandmortyapi.com/api/character/${id}`;
    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json());
            updateFetchedData(data);
        })();
    }, [api]);
    return (
        <div className='container d-flex justify-content-center'>
            <div style={{ padding: 25, border: '2px solid orange', borderRadius: 10 }} className=''>
                <div className='d-inline-flex flex-wrap gap-5 justify-content-center'>
                    <img style={{ borderRadius: 10 }} src={image} alt="" className='img-fluid' />
                    <div className='d-flex flex-column gap-3'>
                        <h1 className=''>
                            {name}
                        </h1>
                        {(() => {
                            if (status === "Dead") {
                                return <div className="badge bg-danger fs-5">{status}</div>;
                            } else if (status === "Alive") {
                                return <div className=" badge bg-success fs-5">{status}</div>;
                            } else {
                                return <div className="badge bg-secondary fs-5">{status}</div>;
                            }
                        })()}
                        <div className="content">
                            <div className="my-2">
                                <span className="fw-bold">Gender : </span>
                                {gender}
                            </div>
                            <div className="my-2">
                                <span className="fw-bold">Location: </span>
                                {location?.name}
                            </div>
                            <div className="my-2">
                                <span className="fw-bold">Origin: </span>
                                {origin?.name}
                            </div>
                            <div className="my-2">
                                <span className="fw-bold">Species: </span>
                                {species}
                            </div>
                            <div className="">
                                <span className="fw-bold">Type: </span>
                                {type == "" ? "???" : type}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardInfo
