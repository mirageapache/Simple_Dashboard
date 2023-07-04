import React from 'react';
import HomePage from 'pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'styles/css/reset.css';
import 'styles/css/base.css';

function App() {
  const basename = process.env.PUBLIC_URL;
  return (
    <div className="App">
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path='*' element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
