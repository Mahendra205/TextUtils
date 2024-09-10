import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navber from "./components/Navber";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //Wheather dark mode is enable or not
  const [textMode, setTextMode] = useState("Enable DarkMode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const changeMode = () => {
    if (textMode === "Enable DarkMode") {
      setTextMode("Disable DarkMode");
    } else {
      setTextMode("Enable DarkMode");
    }
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert(" Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navber
          title="TextUtils"
          aboutText="about"
          mode={mode}
          toggleMode={toggleMode}
          textMode={textMode}
          changeMode={changeMode}
        />
        <Alert alert={alert} />
        <div className="container my-4">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextUtils  - Word Counter Character Counter"
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
