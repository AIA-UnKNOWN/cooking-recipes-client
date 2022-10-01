import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import useApp from './app.hook';
import LoginPage from '@pages/Login';
import HomePage from '@pages/Home';
import AddRecipePage from '@pages/AddRecipePage';

const App = props => {
  useApp();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<LoginPage />} />

      <Route path="/recipe/add" element={<AddRecipePage />} />
    </Routes>
  );
}

export default App;