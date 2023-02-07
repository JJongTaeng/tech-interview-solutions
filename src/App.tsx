import React from 'react';
import './App.css';
import { Button } from "antd";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Button>테스트</Button>} />
      </Routes>

    </div>
  );
}

export default App;
