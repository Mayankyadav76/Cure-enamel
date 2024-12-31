import React, { useState } from "react";
import { animalData } from "@/data";
import AnimalData from "./AnimalData";


//Props interface for the component
interface Props {
  onButtonClicked: (animal: string, problem: string) => void;
}

//Problem interface to represent a problem associated with an animal
interface Problem {
  name: string;
  content: string[];
}


const Cards: React.FC<Props> = ({ onButtonClicked }) => {

  // variable and trackers for selected animal and problem
  const [selectAnimal, setSelectAnimal] = useState<string | null>(null);
  const [selectProblem, setSelectProblem] = useState<string | null>(null);


  // function to handle changes when problem is selected
  const handleProblemChange = (animal: string, problem: string) => {

    // update the state value of animal and problem 
    setSelectAnimal(animal);
    setSelectProblem(problem);

    //calling the onButtonClick function which was passed in parent component with selected animal and problem
    onButtonClicked(animal, problem);
  };

  //extracting animal name from animalData
  const animalNames = Object.keys(animalData);

  return (
    <div>
      <div className="animals flex col-1 pb-20 overflow-x-auto hide-scrollbar relative" style={{ zIndex: 10 }}>
        {animalNames.map((animal) => (
          <div key={animal} className="card w-44 pb-0 bg-accent shadow-xl ml-10">
            <figure className="px-2 pt-2 pb-0">
              <img src={`/assests/${animal.toLowerCase()}.png`} alt={animal} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-base-100">{animal.toUpperCase()}</h2>
              <div className="card-actions">
                {/* Dropdown menu for selecting a problem */}
                <details className="dropdown">
                  <summary className="m-1 btn w-max bg-base-100 border-0 text-accent font-bold">
                    Help type
                  </summary>
                   {/* List of problems for the selected animal */}
                  <ul className="p-2 shadow text-stone-800 menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    {(animalData as any)[animal].problems.map((problem: Problem) => (
                      <li key={problem.name} onClick={() => handleProblemChange(animal, problem.name)}>
                         {/* Display each problem as a clickable item */}
                        <a>{problem.name}</a>
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
            </div>
          </div>
        ))}
      </div>
              
      {/* Display AnimalData component if an animal and problem are selected */}
      <div className="mt-0 z-10 md:w-100">
        {selectAnimal && selectProblem && (
          <AnimalData
          selectAnimal={selectAnimal}
          selectProblem={selectProblem}
          data={animalData}
        />
        )}
      </div>
 </div>
  );
};

export default Cards;
