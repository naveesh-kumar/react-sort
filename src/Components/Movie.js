import React, { useState } from "react";
import movieList from "../Data/MovieList";

function Movie() {
  const [movies, setMovies] = useState(movieList);

  const updateMovieListByUpvotes = ()=>{
    const updatedList = movies.sort((a,b)=>{
      return b["upvotes"]-a["upvotes"];
    })

    setMovies([...updatedList])
  }

  const updateMovieListByDate = ()=>{
    const updatedList = movies.sort((a,b)=>{
      return new Date(b["releaseDate"]).getTime()- new Date(a["releaseDate"]).getTime();
    })
    setMovies([...updatedList])
  }

  return (
    <div className="position-center container">

      <div className="btn-group m-5" role="group">
        <div className="text-center px-3">Sort by</div>
        <button type="button" className="btn btn-danger btn-sm mx-2" onClick={updateMovieListByUpvotes}>Upvotes</button>
        <button type="button" className="btn btn-warning btn-sm" onClick={updateMovieListByDate}>Release Date</button>
      </div>

      <table className="table table-striped text-center">
        <thead>
          <tr>
            <th scope="col">Movie Name</th>
            <th scope="col">Upvotes</th>
            <th scope="col">Release Date</th>
          </tr>
        </thead>
        {movies.map((movie) => {
          const { id, title, upvotes, releaseDate } = movie;
          return (
            <tbody key={id}>
              <tr>
                <td>{title}</td>
                <td>{upvotes}</td>
                <td>{releaseDate}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Movie;
