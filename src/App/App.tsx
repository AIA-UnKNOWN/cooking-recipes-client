import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import useApp from './app.hook';
import LoginPage from '@pages/Login';

const App = props => {
  useApp();

  return (
    <Routes>
      <Route path="/" element={<h1>Logged in</h1>} />
      <Route path="/signin" element={<LoginPage />} />
    </Routes>
  );
}

export default App;