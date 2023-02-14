import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
     return (
          <div>
               <h1>
                    <Link>ExerTracker</Link>
               </h1>
               <ul>
                    <li>
                         <Link to='/exercises'>Exercise List</Link>
                    </li>
                    <li>
                         <Link to='/exercises/add'>Create Exercise</Link>
                    </li>
                    <li>
                         <Link to='/users/add'>Create user</Link>
                    </li>
               </ul>
          </div>
     );
};
