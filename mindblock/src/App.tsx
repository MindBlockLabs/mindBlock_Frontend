import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SignupForm from "./components/Signup";
import SignIn from "./components/SignIn";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
