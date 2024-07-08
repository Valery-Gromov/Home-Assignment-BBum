import { useEffect } from 'react';
import '../../styles/btnStyle.scss';
import './SearchInput.scss';
import plusIcon from '../../assets/images/plus-icon.svg';

import { useDispatch, useSelector } from 'react-redux';
import { getSuggestions } from '../../constants/api';
import { AppDispatch, RootState } from '../../redux/store';
import { addCity } from '../../redux/savedCitiesList/slice';
import { setQuery, setSuggestions } from '../../redux/search/slice';
import { getWeatherByCoord } from '../../redux/weatherItem/asyncActions';
import { resetIsSaved, setIsSaved } from '../../redux/weatherItem/slice';

const SearchInput = () => {
  const dispatch: AppDispatch = useDispatch();
  const { location, isSaved } = useSelector((state: RootState) => state.weatherItem);
  const { suggestions, query } = useSelector((state: RootState) => state.search);

  const fetchSuggestions = async (query: string) => {
    dispatch(setSuggestions(await getSuggestions(query)));
  };
  
  useEffect(() => {
    if (query.length > 1) {
      fetchSuggestions(query);
    } else {
      dispatch(setSuggestions([]));
    }
  }, [query, dispatch, fetchSuggestions]);

  const handleSearch = (data: string) => {
    dispatch(resetIsSaved());
    dispatch(getWeatherByCoord(data));
    dispatch(setQuery(''));
  };

  const handleSave = () => {
    console.log('location', location);
    dispatch(addCity(location));
    dispatch(setIsSaved());
  };

  return (
    <div className="search-input">
      <button className="btn search-input__btn" onClick={handleSave} disabled={isSaved}>
        {!isSaved ? (
          <>
            <img src={plusIcon} alt="add icon" /> <p>Add</p>
          </>
        ) : (
          <p>Added</p>
        )}
      </button>
      <input
        className="btn search-input__input"
        type="text"
        value={query}
        onChange={(e) => dispatch(setQuery(e.target.value))}
        placeholder="Search"
      />
      {suggestions.length > 0 && (
        <ul className="search-input__suggestions">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSearch(suggestion.name)}>
              <h3 className="search-input__suggestions-title">
                {suggestion.name}, {suggestion.country}
              </h3>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
