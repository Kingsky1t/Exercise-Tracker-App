import React from "react";
import { Route, Routes } from "react-router-dom";
import { CreateExercise } from "./components/create-exercise";
import { CreateUser } from "./components/create-user";
import { ExerciseList } from "./components/exercise-list";
import { EditExercise } from "./components/edit-exercise";
import { Navbar } from "./components/navbar";
import { Home } from "./components/home";

export const App = () => {
     return (
          <div>
               <Navbar />
               <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/exercises' element={<ExerciseList />} />
                    <Route path='/exercises/add' element={<CreateExercise />} />
                    <Route
                         path='/exercises/update/:id'
                         element={<EditExercise />}
                    />
                    <Route path='/users/add' element={<CreateUser />} />
               </Routes>
          </div>
     );
};
