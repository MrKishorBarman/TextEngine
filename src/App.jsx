import About from "./components/About.jsx";
import Alert from "./components/Alert.jsx";
import Navbar from "./components/Navbar.jsx";
import TextForm from "./components/TextForm.jsx";
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)

  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')
  }

  var toggleMode = (cls) => {
    removeBodyClasses()
    document.body.classList.add('bg-' + cls)

  }

  var switchMode = () => {

    removeBodyClasses()

    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enabled", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")
    }
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} switchMode={switchMode} />

        <Alert alert={alert} />

        {/* <TextForm /> */}

        <div className="container my-3">
          <Routes>
            <Route
              exact path="/"
              element=
              {<TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode} showAlert={showAlert} />}>
            </Route>

            <Route
              exact path="/About"
              element=
              {<About mode={mode} />}>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
