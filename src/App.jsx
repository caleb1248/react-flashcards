import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from './components/editor/container';
import Home from './components/home'
import './App.css';

function App() {
  return (
    <>
    <Router><Routes>
      <Route path='/editor/:theID' element={<Container/>}/>
			<Route exact path='/' element={<Home/>} />
    </Routes></Router>
    </>
  )
}

export default App
