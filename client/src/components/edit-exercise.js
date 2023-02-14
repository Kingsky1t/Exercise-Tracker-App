import React from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

export const EditExercise = () => {
     const navigate = useNavigate();
     const { id } = useParams();
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

          axios.get(`http://localhost:5000/exercises/${id}`)
               .then((res) => {
                    setExercise(prev=>({
                      ...prev,
                         username: res.data.username,
                         description: res.data.description,
                         duration: res.data.duration,
                         date: new Date(res.data.date),
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
          axios.post(`http://localhost:5000/exercises/update/${id}`, {
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
