import React from "react";

function Pets() {
  const pets = [
    {
      name: "bruno",
      type: "dog",
    },
    {
      name: "mary",
      type: "cat",
    },
  ];

  return (
    <div>
      {pets.map((pet, index) => (
        <div key={index}>
          <h1>{pet.name}</h1>
          <h2>{pet.type}</h2>
        </div>
      ))}
    </div>
  );
}

export default Pets;
