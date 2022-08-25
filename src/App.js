import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React,{useState} from 'react';
import{
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";

// import {Routes,Route} from 'react-router'

function App() {

  const[mode,setMode]=useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
        setAlert({
          msg: message,
          type :type
        })
        setTimeout(() => {
            setAlert(null)
        }, 1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enabled!","success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled!","success");
    }
  }

  return (
    <>
      <Router>
      <Navbar title="TEXTUTILS" mode={mode} toggleMode={toggleMode}/> 
      <Alert alert={alert}/>
      <div className="container my-3 " >
        <Routes>
            <Route path="/about" element={<About mode={mode}/>}>
            </Route>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter any text below to Try TextUtils" mode={mode}/>}>
            </Route>
          </Routes>
      </div>
      </Router>
      
    </>
  );
}

export default App;
