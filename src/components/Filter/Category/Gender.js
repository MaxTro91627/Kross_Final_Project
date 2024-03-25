import React from 'react'
import FilterButtonCell from '../FilterButtonCell';

const Gender = ({ updateGender, updatePageNumber }) => {
    let genders = ["Male", "Female", "Genderless", "Unknown"];
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
                <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                >
                    Gender
                </button>
            </h2>
            <div
                id="collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body d-flex flex-wrap gap-3">
                    {genders.map((items, index) => {
                        return (
                            <FilterButtonCell
                                name="gender"
                                index={index}
                                key={index}
                                updatePageNumber={updatePageNumber}
                                task={updateGender}
                                input={items}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Gender
