import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as React from 'react';
import { Home } from './pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
