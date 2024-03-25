import React from 'react'
import Status from './Category/Status'
import Gender from './Category/Gender'
import Species from './Category/Species'
import "./FilterButtonCellStyle.css"

const Filter = ({
    updatePageNumber,
    updateStatus,
    updateGender,
    updateSpecies,
}) => {
    let clear = () => {
        updateStatus("");
        updateGender("");
        updateSpecies("");
        updatePageNumber(1);
        window.location.reload(false);
    };
    return (
        <div className='mb-5'>
            <div className='text-center fs-4 fw-bold'>Filter Heroes</div>
            <div onClick={clear} style={{ cursor: "pointer", color: 'orange' }} className='text-center text-decoration-underline mb-2'>Clear Filters</div>
            <div className="accordion" id="accordionExample">
                <Gender
                    updatePageNumber={updatePageNumber}
                    updateGender={updateGender}
                />
                <Status
                    updatePageNumber={updatePageNumber}
                    updateStatus={updateStatus}
                />
                <Species
                    updatePageNumber={updatePageNumber}
                    updateSpecies={updateSpecies}
                />
            </div>
        </div>

    )
}

export default Filter
