import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Homepage from "./pages/Homepage";  // Ensure this matches the actual filename
import FavouritesPage from "./pages/FavouritesPage";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/favourites' element={<FavouritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
