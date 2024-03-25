import React from "react";
import "./FilterButtonCellStyle.css"

const FilterButtonCell = ({ input, task, updatePageNumber, index, name }) => {
    return (
        <div>
            <style jsx>
                {`
          .x:checked + label {
            background-color: orange;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
            </style>

            <div className="form-check">
                <input
                    className="form-check-input x"
                    type="radio"
                    name={name}
                    id={`${name}-${index}`}
                />
                <label
                    onClick={(x) => {
                        task(input);
                        updatePageNumber(1);
                    }}
                    className={`btn btn-outline-primary`}
                    for={`${name}-${index}`}
                >
                    {input}
                </label>
            </div>
        </div>
    );
};

export default FilterButtonCell;
