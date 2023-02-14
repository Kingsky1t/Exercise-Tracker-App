import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const ExerciseList = () => {
     const [exercises, setExercises] = React.useState([]);
     React.useEffect(() => {
          axios.get("http://localhost:5000/exercises")
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
               <table>
                    <thead>
                         <tr>
                              <th>Username</th>
                              <th>Description</th>
                              <th>Duration</th>
                              <th>Date</th>
                              <th>Options</th>
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
                                             <button>
                                                  <Link
                                                       to={`/exercises/update/${item._id}`}>
                                                       Edit
                                                  </Link>
                                             </button>
                                             <button
                                                  onClick={() => {
                                                       handleDelete(item._id);
                                                  }}>
                                                  Delete
                                             </button>
                                        </td>
                                   </tr>
                              );
                         })}
                    </tbody>
               </table>
          </div>
     );
};
