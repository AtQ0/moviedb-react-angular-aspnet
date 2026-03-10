import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import NavLinks from "./components/NavLinks";
import DiscoverPage from "./pages/DiscoverPage";

function App() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Sidebar - fixed, hidden on small screens */}
      <aside className="max-sm:hidden fixed left-0 top-0 bottom-0 z-10 w-64 shrink-0 border-r border-gray-500 flex flex-col items-center py-6">
        <a href="/">
          <h2 className="text-xl font-semibold">Movies</h2>
        </a>
        <div className="flex-1 flex flex-col justify-center w-full px-4 items-center pb-20">
          <NavLinks />
        </div>
      </aside>

      {/* Right side - margin when sidebar visible */}
      <div className="ml-0 sm:ml-64">
        <header className="fixed top-0 left-0 right-0 sm:left-64 z-10 bg-black px-4 py-2">
          <Header />
        </header>

        <section className="px-4 pt-20 sm:pt-14 pb-3">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/discover" element={<DiscoverPage />} />
          </Routes>
        </section>
      </div>
    </main>
  );
}

export default App;
