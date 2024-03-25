import React from 'react'
import FilterButtonCell from '../FilterButtonCell';

const Species = ({ updateSpecies, updatePageNumber }) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Robot",
    "Animal",
    "Mythological",
    "Disease",
    "Cronenberg",
    "Poopybutthole",
    "Unknown",
  ];
  return (
    <div className="accordion-item ">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Species
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {species.map((item, index) => {
            return (
              <FilterButtonCell
                name="species"
                index={index}
                key={index}
                updatePageNumber={updatePageNumber}
                task={updateSpecies}
                input={item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Species
