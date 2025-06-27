import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SignupForm from "./pages/Signup";
import SignIn from "./pages/SignIn";
import LearnMore from "./pages/LearnMore";
import Layout from "./components/Layout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/learnmore" element={<LearnMore />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/learnmore" element={<LearnMore />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
};

export default App;
