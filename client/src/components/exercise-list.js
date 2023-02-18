import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const ExerciseList = () => {
     const [exercises, setExercises] = React.useState([]);

     React.useEffect(() => {
          axios.get("https://mern-app-backend-90hv.onrender.com/exercises")
               .then((res) => {
                    setExercises(res.data);
               })
               .catch((err) => {
                    console.log(err);
               });
     }, []);

     const handleDelete = async (id) => {
          axios.delete(`http://localhost:5000/exercises/${id}`)
               .then((res) => {
                    console.log(res);
               })
               .catch((err) => {
                    console.log(err);
               });
          setExercises((list) => list.filter((item) => item._id !== id));
     };

     return (
          <div>
               {exercises.length !== 0 ? (
                    <table role='grid'>
                         <thead>
                              <tr>
                                   <th scope='col'>Username</th>
                                   <th scope='col'>Description</th>
                                   <th scope='col'>Duration</th>
                                   <th scope='col'>Date</th>
                                   <th scope='col'>Options</th>
                              </tr>
                         </thead>
                         <tbody>
                              {exercises.map((item, i) => {
                                   item.date = new Date(item.date);
                                   return (
                                        <tr key={i}>
                                             <td>{item.username}</td>
                                             <td>{item.description}</td>
                                             <td>{item.duration}</td>
                                             <td>{`${item.date.getDate()}/${
                                                  item.date.getMonth() + 1
                                             }/${item.date.getFullYear()}`}</td>
                                             <td>
                                                  <Link
                                                       style={{
                                                            padding: "0.3rem 0.5rem",
                                                            margin: "0.2rem",
                                                       }}
                                                       role='button'
                                                       to={`/exercises/update/${item._id}`}>
                                                       Edit
                                                  </Link>
                                                  <a
                                                       href='#'
                                                       role='button'
                                                       style={{
                                                            padding: "0.3rem 0.5rem",
                                                            margin: "0.2rem",
                                                       }}
                                                       onClick={() => {
                                                            handleDelete(
                                                                 item._id
                                                            );
                                                       }}>
                                                       Delete
                                                  </a>
                                             </td>
                                        </tr>
                                   );
                              })}
                         </tbody>
                    </table>
               ) : (
                    <article aria-busy='true'>
                         Fetching data please wait
                    </article>
               )}
          </div>
     );
};
