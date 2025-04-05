import './App.css';
import { Navbar } from './components/navigation';
import GameFeature from './components/GameFeatures';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <Navbar />
      <main className="flex flex-col items-center justify-center pt-20"> {/* Added pt-20 to account for fixed navbar */}
        <GameFeature />
      </main>
    </div>
  );
}

export default App;