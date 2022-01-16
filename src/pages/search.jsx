import React, { useContext, useState, useEffect } from "react";

import { BACKEND_URL } from "../constants/site";

import UserContext from "../contexts/userContext";

import SearchFilter from "./search/searchFilter";
import RecipeCards from "./search/recipeCards";

import "./search/styles.sass";

function Search() {
  const user = useContext(UserContext);

  const [filterLoading, setFilterLoading] = useState(false);
  const [filterError, setFilterError] = useState(false);

  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const [constants, setConstants] = useState({
    difficulty: ["beginner", "intermediate", "advanced"],
    time: ["<1 hour", "1-2 hours", "2-3 hours", ">3 hours"],
    ingredients: ["one", "two", "three"],
  });
  const [filterDifficulty, setFilterDifficulty] = useState(null);
  const [filterTime, setFilterTime] = useState(null);
  const [filterIngredients, setFilterIngredients] = useState([]);

  const handleDifficulty = (difficulty) => {
    if (difficulty === filterDifficulty) {
      setFilterDifficulty(null);
    } else {
      setFilterDifficulty(difficulty);
    }
  };

  const handleTime = (time) => {
    if (time === filterTime) {
      setFilterTime(null);
    } else {
      setFilterTime(time);
    }
  };

  const handleIngredient = (ingredient) => {
    const i = filterIngredients.indexOf(ingredient);
    if (i > -1) {
      setFilterIngredients([
        ...filterIngredients.slice(0, i),
        ...filterIngredients.slice(i + 1),
      ]);
    } else {
      setFilterIngredients(filterIngredients.concat([ingredient]));
    }
  };

  const fetchConstants = () => {
    setFilterLoading(true);
    setFilterError(false);
    fetch(`${BACKEND_URL}/api/constants`)
      .then((result) => result.json())
      .then(
        (result) => {
          setConstants(result);
          setFilterLoading(false);
        },
        (error) => {
          setFilterLoading(false);
          setFilterError(true);
        }
      );
  };

  const fetchSearchResults = (filters) => {
    setSearchLoading(true);
    setSearchError(false);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(filters),
    };

    fetch(`${BACKEND_URL}/api/search_view`, requestOptions)
      .then((result) => result.json())
      .then(
        (result) => {
          setSearchResults(result);
          setSearchLoading(false);
        },
        (error) => {
          setSearchLoading(false);
          setSearchError(true);
        }
      );
  };

  useEffect(() => {
    fetchConstants();
  }, []);

  useEffect(() => {
    const filters = {
      difficulty: filterDifficulty,
      time: filterTime,
      ingredients: filterIngredients,
    };

    fetchSearchResults(filters);
  }, [filterDifficulty, filterTime, filterIngredients]);

  const getFilters = () => {
    if (filterLoading) {
      return;
    } else if (filterError) {
      return (
        <div className="error">
          Error loading filters! Please refresh the page.
        </div>
      );
    } else {
      return (
        <>
          <h2>Difficulty</h2>
          <SearchFilter
            className="difficulty"
            list={constants.difficulty}
            selected={filterDifficulty}
            handleChange={handleDifficulty}
          />

          <h2>Time</h2>
          <SearchFilter
            className="time"
            list={constants.time}
            selected={filterTime}
            handleChange={handleTime}
          />

          <h2>Ingredients</h2>
          <SearchFilter
            className="ingredients"
            multiselect
            list={constants.ingredients}
            selected={filterIngredients}
            handleChange={handleIngredient}
          />
        </>
      );
    }
  };

  return (
    <div id="search" className="page">
      <h1>Search Recipes</h1>
      <div id="search-filters">{getFilters()}</div>
      <RecipeCards
        recipes={searchResults}
        loading={searchLoading}
        error={searchError}
        constants={{ time: constants.time, difficulty: constants.difficulty }}
      />
    </div>
  );
}

export default Search;