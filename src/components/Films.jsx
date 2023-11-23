import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Films = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.vercel.app/films")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((films) => {
        // console.log(allFilms);
        setFilms(films);
      })
      .catch((err) => {
        console.log(
          `"There was an error fetching films API. Specifically: ${err}"`
        );
      });
  }, []);

  return (
    <>
      {films.map((film) => (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-6 mb-3" key={film.id}>
              <div className="card">
                <div className="card-body bg-light">
                  <h5 className="card-title text-center">{film.title}</h5>
                  <p className="card-text">{film.description}</p>
                  <p className="card-text text-muted d-flex justify-content-evenly">
                    <span>Release Year: {film.release_date}</span>
                    <span>Run Time (min): {film.running_time}</span>
                  </p>
                  <Link to={`/films/${film.id}`} className="btn btn-outline-success mx-5">More Information</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Films;