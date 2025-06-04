import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Learn from "./components/Learn";
import SignupForm from "./components/Signup";
import SignIn from "./components/SignIn";
import ProtectedRoute from "./components/ProtectedRoute";
import Navigation from "./components/Navigation";
import { useAuthStore } from "./store/authStore";

const AppContent = () => {
  const location = useLocation();
  const currentUser = useAuthStore((state) => state.currentUser);
  const isAuthenticated = !!currentUser?.isAuthenticated;

  // Hide navigation on home page
  const showNavigation = location.pathname !== "/";

  return (
    <div className="min-h-screen bg-black">
      {showNavigation && <Navigation />}
      <div className={showNavigation ? "pt-16" : ""}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route
            path="/signup"
            element={
              isAuthenticated ? <Navigate to="/" replace /> : <SignupForm />
            }
          />
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/" replace /> : <SignIn />}
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
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
