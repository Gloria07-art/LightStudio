import { Home } from './Componenets/Home';
import { Routes, Route } from 'react-router-dom';
import {SignIn} from "./Componenets/SignIn"
import { SignUp } from './Componenets/SignUp';
import {ForgotPassword} from './Componenets/ForgotPassword'
import './App.css';

function App() {

  console.log()
  
  return (
    <div className="App">
      <>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='SignUp' element={<SignUp/>}/>
        <Route path='ForgotPassword' element={<ForgotPassword/>}/>
        <Route path='Home' element={<Home/>}/>
        </Routes>
        </>
     
    </div>
  );
}

export default App;
