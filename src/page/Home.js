import React, { useState, useEffect } from "react";
import MovieList from "../components/MovieCardComponent/MovieList";
import Search from "../components/SearchComponent/Search";
import Header from "../components/HeaderComponent/Header";
import Filter from "../components/FilterComponent/Filter";
import Pagination from "../components/PaginationComponent/Pagination";
import { getPopularMovies } from "../api/api";
import { getGenres } from "../api/api";
import { getMovieByKeyword } from "../api/api";
import { getMoviesByGenres } from "../api/api";

const Home = () => {
  const [displayResult, setDisplayResult] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState(new Set([]));
  const [page, setPage] = useState(1);
  const [pageButtons, setPageButtons] = useState([1, 2, 3, 4, 5, " ... ", 500]);

  useEffect(() => {
    getPopularMovies(page).then((data) => setPopularMovies(data.results));
    getGenres().then((data) => setCategories(data.genres));
  }, []);

  useEffect(() => {
    setDisplayResult(popularMovies);
  }, [popularMovies]);

  useEffect(() => {
    getPopularMovies(page).then((data) => setPopularMovies(data.results));
  }, [page]);

  useEffect(() => {
    const selectedGenresArr = Array.from(selectedGenres);
    if (keyword === "") {
      if (selectedGenres.size !== 0) {
        getMoviesByGenres(selectedGenresArr).then((data) =>
          setDisplayResult(data.results)
        );
      } else {
        setDisplayResult(popularMovies);
      }
    } else if (keyword === "" && selectedGenres.size === 0) {
      setDisplayResult(popularMovies);
    } else {
      getMovieByKeyword(keyword).then((data) => {
        setDisplayResult((prev) => {
          return data.results.filter((movie) => movie.backdrop_path !== null);
        });
      });
    }
  }, [keyword, selectedGenres]);

  const onSearchChange = (keyword) => {
    setKeyword((prev) => {
      return keyword;
    });
  };

  const onFilterChange = (category) => {
    setSelectedGenres((prev) => {
      if (prev.has(category)) {
        prev.delete(category);
        return new Set(prev);
      } else {
        const tempSet = selectedGenres.values();
        prev.delete(tempSet.next().value);
        prev.add(category);
        return new Set(prev);
      }
    });
  };

  const handlePrev = () => {
    if (page === 1) setPage(1);
    else setPage((prev) => page - 1);
  };

  const handleNext = () => {
    if (page === 500) setPage(500);
    else setPage((prev) => page + 1);
  };

  const handlePagination = (e, item) => {
    if (!isNaN(item)) {
      setPage(item);
      if (item === 4 || (item < 5 && item > 0)) {
        setPageButtons((pev) => {
          return [1, 2, 3, 4, 5, " ... ", 500];
        });
      } else if (item === 500) {
        setPageButtons((pev) => {
          return [" ... ", item - 4, item - 3, item - 2, item - 1, item];
        });
      } else {
        setPageButtons((pev) => {
          return [1, " ... ", item - 1, item, item + 1, " ... ", 500];
        });
      }
    }
  };

  return (
    <div>
      <Header />
      <Filter
        categories={categories}
        onFilterChange={onFilterChange}
        selectedGenres={selectedGenres}
      />
      <Search
        movies={popularMovies}
        keyword={keyword}
        setDisplayResult={setDisplayResult}
        onSearchChange={onSearchChange}
      />
      <MovieList popularMovies={displayResult} />

      <Pagination
        handlePrev={handlePrev}
        pageButtons={pageButtons}
        handlePagination={handlePagination}
        handleNext={handleNext}
        page={page}
      />
    </div>
  );
};

export default Home;
