import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SignupForm from "./components/Signup";
import SignIn from "./components/SignIn";
import LearnMore from "./components/LearnMore";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/learnmore" element={<LearnMore />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
