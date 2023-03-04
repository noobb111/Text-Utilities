// import logo from './logo.svg';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar'
import TextForm from './component/TextForm'
import React,{useState} from 'react';
import Alert from './component/Alert';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
const [mode, setMode] = useState("light");
const [alert, setAlert] = useState(null);

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1300);
}

const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor="#042743";
    showAlert('Dark mode is enabled','success');
  }
  else{
    setMode('light');
    document.body.style.backgroundColor="white";
    showAlert('Light mode is enabled','success');
  }
}

return (
<>
  <Router>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert} />
  <div className="container mt-3">
    <Routes>
      <Route exact path="/about" element={<About />}> </Route>
      <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode} />}></Route>
    </Routes>
  </div>
</Router>
</>
  );
}

export default App;
