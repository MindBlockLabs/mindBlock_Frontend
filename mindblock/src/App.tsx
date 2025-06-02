import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SignupForm from "./components/Signup";
import SignIn from "./components/SignIn";
import { AuthProvider } from "./components/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
