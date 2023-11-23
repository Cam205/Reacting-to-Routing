import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FilmsDetail = () => {
  const [film, setFilm] = useState();
  const { filmid } = useParams();

  useEffect(() => {
    fetch(`https://ghibliapi.vercel.app/films/${filmid}`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((film) => {
        // console.log(allFilms);
        setFilm(film);
      })
      .catch((err) => {
        console.log(
          `There was an error fetching films API for ${filmid}. Specifically: ${err}`
        );
      });
  }, [filmid]);

  return (
    <>
        <div className="col-sm-6 mb-3" key={film?.id}>
          <div className="card">
            <div className="card-body bg-light">
              <h5 className="card-title text-center">{film?.title}</h5>
              <p className="card-text">{film?.description}</p>
              <p className="card-text text-muted d-flex justify-content-evenly">
                <span>Release Year: {film?.release_date}</span>
                <span> Run Time (min): {film?.running_time}</span>
              </p>
            </div>
          </div>
        </div>
    </>
  );
};

export default FilmsDetail;