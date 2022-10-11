import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import Form from './components/Form';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={Form} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
