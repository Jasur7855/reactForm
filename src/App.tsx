import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SignIn />} path="/" />
        <Route element={<SignUp />} path="/signUp" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
