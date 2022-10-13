import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DeckContainer from './components/container';
import Home from './components/home';
import Editor from './components/editor/editor';
import View from "./components/view";
import Import from "./components/import";
import NotFound from "./components/404.jsx";
import './App.css';

function App() {
  return (
    <>
    <Router><Routes>
      <Route path='/editor/:theID' element={<DeckContainer><Editor /></DeckContainer>}/>
			<Route exact path='/' element={<Home/>} />
			<Route path='/view/:theID' element={<DeckContainer><View /></DeckContainer>}/>
			<Route path="/import/:deck" element={<Import />}/>
			<Route path="*" element={<NotFound />} />
    </Routes></Router>
    </>
  )
}

export default App
