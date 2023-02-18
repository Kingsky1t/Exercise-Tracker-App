import React from "react";
import axios from "axios";

export const CreateUser = () => {
     const [user, setUser] = React.useState({
          username: "",
     });

     const handleChange = (e) => {
          setUser({ username: e.target.value });
     };

     const handleSubmit = async (e) => {
          e.preventDefault();
          await axios
               .post("http://localhost:5000/users/add", user)
               .then((res) => {
                    console.log(res);
               })
               .catch((err) => {
                    console.log(err);
               });
          setUser({ username: "" });
     };

     return (
          <div
               style={{
                    width: "90%",
                    margin: "auto",
               }}>
               <h4>Create a New User</h4>
               <form onSubmit={handleSubmit}>
                    <article>
                         <label htmlFor='username'>Username:</label>
                         <input
                              id='users-username'
                              name='username'
                              type='text'
                              onChange={handleChange}
                              value={user.username}
                              style={{
                                   fontSize: "",
                                   lineHeight: "",
                              }}
                         />
                    </article>
                    <div>
                         <button>Submit</button>
                    </div>
               </form>
          </div>
     );
};
