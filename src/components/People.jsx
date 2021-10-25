import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const People = (props) => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((allPeople) => {
        console.log(allPeople);
        setPeople(allPeople);
      })
      .catch((err) => {
        console.log(
          `"There was an error fetching people API. Specifically: ${err}"`
        );
      });
  }, []);

  return (
    <>
      {people.map((people) => (
        <div className="col-sm-6 mb-3" key={people.id}>
          <div className="card">
            <div className="card-body bg-light">
              <h5 className="card-title">Name: {people.name}</h5>
              <p className="card-text">Age: {people.age}</p>
              <p className="card-text">Gender: {people.gender}</p>
              <p className="card-text text-muted">
                <a href={people.url} target="_blank" rel="noreferrer">
                  Link to their JSON info
                </a>
              </p>
              <Link to={`/people/${people.id}`} className="btn btn-outline-success mx-5">More Information</Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default People;