import React from 'react';
import Sorting from './Sorting';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/*' element={<MainComponent />} /> */}
        <Route path='/*' element={<Sorting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
