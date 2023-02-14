import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const CreateExercise = () => {
     const navigate = useNavigate();
     const [exercise, setExercise] = React.useState({
          username: "",
          description: "",
          duration: "",
          date: Date.now(),
          users: [],
     });
     React.useEffect(() => {
          axios.get("http://localhost:5000/users")
               .then((res) => {
                    setExercise((prev) => ({
                         ...prev,
                         users: res.data.map((item) => item.username),
                    }));
               })
               .catch((err) => {
                    console.log(err);
               });
     }, []);
     const handleChange = (e) => {
          setExercise((prev) => {
               return {
                    ...prev,
                    [e.target.name]: e.target.value,
               };
          });
     };
     const handleDateChange = (date) => {
          setExercise((prev) => ({
               ...prev,
               date: date,
          }));
     };
     const handleSubmit = (e) => {
          console.log(exercise);
          e.preventDefault();
          axios.post("http://localhost:5000/exercises/add", {
               username: exercise.username,
               description: exercise.description,
               duration: exercise.duration,
               date: exercise.date,
          })
               .then((res) => {
                    console.log(res);
               })
               .catch((err) => {
                    console.log(err);
               });
          navigate("/exercises");
     };
     return (
          <div>
               <h1>Create a new </h1>
               <form onSubmit={handleSubmit}>
                    <div>
                         <label htmlFor='exercise-username'>Username:</label>
                         <select name='username' onChange={handleChange}>
                              <option disabled>choose a user</option>
                              {exercise.users.map((item, i) => (
                                   <option key={i} value={item}>
                                        {item}
                                   </option>
                              ))}
                         </select>
                    </div>
                    <div>
                         <label htmlFor='exercise-description'>
                              Description:
                         </label>
                         <input
                              id='exercise-description'
                              type='text'
                              name='description'
                              value={exercise.description}
                              onChange={handleChange}
                         />
                    </div>
                    <div>
                         <label htmlFor='exercise-duration'>
                              Duration(in minutes):
                         </label>
                         <input
                              id='exercise-duration'
                              type='number'
                              name='duration'
                              value={exercise.duration}
                              onChange={handleChange}
                         />
                    </div>
                    <div>
                         <label htmlFor='exercise-date'>Date:</label>
                         <DatePicker
                              dateFormat='dd/MM/yyyy'
                              selected={exercise.date}
                              onChange={handleDateChange}
                         />
                    </div>
                    <div>
                         <button>Submit</button>
                    </div>
               </form>
          </div>
     );
};
