import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>{/*{code here}*/   <nav>
  <ul>
    <movies to="/movies" activeClassName="active"><h1>Movies Page</h1></movies>
  </ul>
</nav>  }</div>;
}

export default Movies;
