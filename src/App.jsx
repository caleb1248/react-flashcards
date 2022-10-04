import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Editor from './components/editor/editor';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Editor></Editor>}/>
      </Routes>
      </Router>
    </>
  )
}

export default App
