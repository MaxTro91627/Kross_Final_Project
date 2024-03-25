import React from 'react'
import FilterButtonCell from '../FilterButtonCell';

const Status = ({ updateStatus, updatePageNumber }) => {
    let status = ["Alive", "Dead", "Unknown"];
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                >
                    Status
                </button>
            </h2>
            <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
            >
                <div className="accordion-body d-flex flex-wrap gap-3">
                    {status.map((item, index) => (
                        <FilterButtonCell
                            key={index}
                            index={index}
                            name="status"
                            task={updateStatus}
                            updatePageNumber={updatePageNumber}
                            input={item}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Status
