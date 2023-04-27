import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>{/*{code here}*/   <nav>
  <ul>
    <directors to="/directors" activeClassName="active"><h1>Directors Page</h1> </directors>
  </ul>
</nav>  }</div>;
}

export default Directors;
