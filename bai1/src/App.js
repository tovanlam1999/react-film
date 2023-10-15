

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import MovieDetail from "./pages/moviedail/MovieDetail";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="movies/:type" element={<Home />} />
          <Route path="movie/:id" element={<MovieDetail/>} />
          <Route path="/*" element={<h1>Error Page</h1>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
