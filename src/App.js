import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Add from './components/Add';
import View from './components/View';

function App() {
  return (
    <div>
      <BrowserRouter>
   <Routes>
    <Route path="/" element={ <Login/> }/>
    <Route path="/add" element={ <Add/> }/>
    <Route path="/view" element={ <View/> }/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
