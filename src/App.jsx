import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DeckContainer from './components/container';
import Home from './components/home';
import Editor from './components/editor/editor';
import View from "./components/view";
import './App.css';

function App() {
  return (
    <>
    <Router><Routes>
      <Route path='/editor/:theID' element={<DeckContainer><Editor /></DeckContainer>}/>
			<Route exact path='/' element={<Home/>} />
			<Route path='/view/:theID' element={<DeckContainer><View /></DeckContainer>}/>
    </Routes></Router>
    </>
  )
}

export default App
