import React from "react";
import axios from "axios";

export const CreateUser = () => {
     const [user, setUser] = React.useState({
          username: "",
     });
     const handleChange = (e) => {
          setUser({ username: e.target.value });
     };
     const handleSubmit = (e) => {
          e.preventDefault();
          axios.post("http://localhost:5000/users/add", user)
               .then((res) => {
                    console.log(res);
               })
               .catch((err) => {
                    console.log(err);
               });
          setUser({ username: "" });
     };
     return (
          <div>
               <h1>Create a New User</h1>
               <form onSubmit={handleSubmit}>
                    <div>
                         <label htmlFor='username'>Username:</label>
                         <input
                              id='users-username'
                              name='username'
                              type='text'
                              onChange={handleChange}
                              value={user.username}
                         />
                    </div>
                    <div>
                         <button>Submit</button>
                    </div>
               </form>
          </div>
     );
};
