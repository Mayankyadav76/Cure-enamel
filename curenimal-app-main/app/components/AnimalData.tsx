import React from 'react';
import Link from 'next/link';


//Problem interface to represent a problem associated with an animal
interface Problem {
  name: string;
  content: string[];
}

// Define the props interface for the AnimalData component
interface AnimalDataProps {
  selectAnimal: string;
  selectProblem: string;
  data: {
    [animal: string]: {
      problems: Problem[];
    };
  };
}

const AnimalData: React.FC<AnimalDataProps> = ({ selectAnimal, selectProblem, data }) => {


// Get the list of problems for the selected animal
  const animalProblems = data[selectAnimal]?.problems;

  // Find the selected problem from the list
  const selectedProblem = animalProblems?.find((problem) => problem.name === selectProblem);


  const backgroundImageUrl = 'url("/assests/signup.png")';

  //display error is problem not found
  if (!selectedProblem) {
    return <div>Animal or problem not found.</div>;
  }

  return (
    <div>
      <div className="card card-side flex items-center justify-center shadow-xl w-90 ml-10 mr-10 lg:mr-20 lg:ml-20" style={{ backgroundImage: backgroundImageUrl, zIndex: 0 }}>
        <div className="card-body w-1/2 md:w-max flex items-center justify-center mb-20">
          <h2 className="card-title text-white">Animal: {selectAnimal}</h2>
          <h2 className="card-title text-white">Problem: {selectProblem}</h2>
          {/* Display the content of the selected problem */}
          <p className="text-white">
            Data:
            <br />
             {/* Map through and display each point of content in the selected problem */}
            {selectedProblem.content.map((point, index) => (
              <span key={index}>
                {point}
                <br />
                <br />
              </span>
            ))}
          </p>

          <Link href="/hospital">
            <button className="btn btn-accent text-neutral-focus mr-5 ml-2">Hospitals Near Me</button>
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default AnimalData;
