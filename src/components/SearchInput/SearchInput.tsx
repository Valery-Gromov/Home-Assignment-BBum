import { useEffect } from 'react';
import '../../styles/btnStyle.scss';
import './SearchInput.scss';
import plusIcon from '../../assets/images/plus-icon.svg';

import { useDispatch, useSelector } from 'react-redux';
import { getGeoData, getSuggestions, getWeatherData } from '../../constants/api';
import { setLocation, setWeather } from '../../redux/weatherItem/slice';
import { location } from '../../redux/weatherItem/types';
import { RootState } from '../../redux/store';
import { addCity } from '../../redux/savedCitiesList/slice';
import { setQuery, setSuggestions } from '../../redux/search/slice';

const SearchInput = () => {
  const dispatch = useDispatch();
  const { location, weather } = useSelector((state: RootState) => state.weatherItem);
  const { suggestions, query } = useSelector((state: RootState) => state.search);

  const getWeatherByCoord = async (query: string) => {
    const coords: location = await getGeoData(query);
    if (!coords) return;

    dispatch(setWeather(await getWeatherData(coords)));

    const newLocation: location = {
      name: coords.name,
      country: coords.country,
      lat: coords.lat,
      lon: coords.lon,
    };
    dispatch(setLocation(newLocation));
  };

  const fetchSuggestions = async (query: string) => {
    dispatch(setSuggestions(await getSuggestions(query)));
  };

  useEffect(() => {
    if (query.length > 1) {
      fetchSuggestions(query);
    } else {
      dispatch(setSuggestions([]));
    }
  }, [query]);

  const handleSearch = (data: string) => {
    getWeatherByCoord(data);
    dispatch(setQuery(''));
  };

  const handleSave = () => {
    console.log('location', location);
    dispatch(addCity(location));
  };

  return (
    <div className="search-input">
      <button className="btn search-input__btn" onClick={handleSave} disabled={!weather}>
        <img src={plusIcon} alt="add icon" /> Add
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
