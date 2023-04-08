
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(msg,type)=>{
    setAlert({
      msg:msg,
      type:type
    })

    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor= '#4f5153';
      showAlert('Dark Mode Enabled',"success")
      // document.title="TextUtils -DarkMode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light Mode Enabled',"success")
    }
  }

  return (
    <>
    
    {/* <Router> */}
      <NavBar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <TextForm heading="Enter the text :" mode={mode} showAlert={showAlert}/>
      {/* <Routes>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/"  element={<TextForm heading="Enter the text :" mode={mode} showAlert={showAlert}/>}></Route>
      </Routes>
    </Router> */}
    
    
    </>
    
  );
}

export default App;


