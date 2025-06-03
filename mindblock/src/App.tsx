import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SignupForm from "./components/Signup";
import SignIn from "./components/SignIn";
import ProtectedRoute from "./components/ProtectedRoute";
import Navigation from "./components/Navigation";
import { useAuthStore } from "./store/authStore";

const App = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated());

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signup"
            element={
              isAuthenticated ? <Navigate to="/" replace /> : <SignupForm />
            }
          />
          <Route
            path="/login"
            element={
              isAuthenticated ? <Navigate to="/" replace /> : <SignIn />
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <div className="container mx-auto px-4 py-8">
                  <h1 className="text-3xl font-bold text-white">Dashboard</h1>
                  <p className="text-gray-300 mt-4">
                    Welcome to your dashboard!
                  </p>
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
