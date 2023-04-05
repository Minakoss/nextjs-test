import MainLayout from "@/components/MainLayout";
import React, { useState } from "react";

function People() {
  const [people, setPeople] = useState(null);

  const getPeople = () => {
    fetch("/api/people1")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          alert("ERROR");
        }
      })
      .then((data) => {
        console.log(data.data);
        setPeople(data.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <MainLayout>
      <div
        style={{
          minHeight: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {people === null && (
          <button className="btn btn-primary" onClick={() => getPeople()}>
            Get People
          </button>
        )}
        {people !== null && people.length > 0 && (
          <div>
            {people.map((person, index) => (
              <div key={index}>
                <div>{person.name}</div>
                <div>{person.age}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
}

export default People;
