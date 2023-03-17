import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import MovieDetails from "./page/MovieDetails/MovieDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/Movie-Search-">
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={`/movies/:id`} element={<MovieDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
