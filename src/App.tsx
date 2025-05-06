import { useCallback } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { StarknetConfig, InjectedConnector } from '@starknet-react/core';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import "./App.css";
import HeroSection from "./components/HeroSection";
import LottieAnimationSection from "./components/LottieAnimationSection";
import GameFeature from "./components/GameFeatures";
import Footer from "./components/Footer";
import { options } from "./config/particlesConfig";
import { AuthPage } from "./components/auth/AuthPage";
import { useAuthStore } from "./store/useAuthStore";

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';

if (!GOOGLE_CLIENT_ID) {
  console.error('VITE_GOOGLE_CLIENT_ID environment variable is not set');
}

const connectors = [
  new InjectedConnector({ options: { id: 'braavos' }}),
  new InjectedConnector({ options: { id: 'argentX' }}),
];

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <StarknetConfig connectors={connectors}>
        <BrowserRouter>
          <div className="relative min-h-screen bg-black text-white overflow-hidden">
            <Particles
              id="tsparticles"
              init={particlesInit}
              options={options}
              className="absolute inset-0 z-0"
            />
            
            <div className="absolute top-0 -left-20 w-72 h-72 bg-[var(--color-secondary-glow)]/24 rounded-full blur-[100px] z-10"></div>
            <div className="absolute top-0 -right-20 w-72 h-72 bg-purple-400/24 rounded-full blur-[100px] z-10"></div>

            <div className="relative z-20">
              <Routes>
                <Route path="/" element={
                  <>
                    <HeroSection />
                    <LottieAnimationSection />
                    <GameFeature />
                    <Footer />
                  </>
                } />
                <Route 
                  path="/auth" 
                  element={
                    isAuthenticated ? <Navigate to="/dashboard" /> : <AuthPage />
                  } 
                />
                <Route 
                  path="/dashboard" 
                  element={
                    isAuthenticated ? <div>Dashboard (Coming Soon)</div> : <Navigate to="/auth" />
                  } 
                />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </StarknetConfig>
    </GoogleOAuthProvider>
  );
}

export default App;
