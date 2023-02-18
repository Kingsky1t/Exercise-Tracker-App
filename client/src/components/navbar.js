import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
     return (
          <nav
               style={{
                    width: "100%",
                    margin: "auto",
                    paddingInline: "1rem 2rem",
                    alignItems: "center",
               }}>
               <ul>
                    <li>
                         <strong style={{ fontSize: "2rem" }}>
                              ExerTracker
                         </strong>
                    </li>
               </ul>
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
          </nav>
     );
};
