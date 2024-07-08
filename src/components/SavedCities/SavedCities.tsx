import { useEffect, useRef } from 'react';
import './SavedCities.scss';
import { useSelector } from 'react-redux';
import { location } from '../../redux/weatherItem/types';
import { RootState } from '../../redux/store';
import SavedCityItem from '../SavedCityItem/SavedCityItem';

const SavedCities = () => {
  const { citiesList } = useSelector((state: RootState) => state.savedCitiesList);

  return (
    <section className="saved-cities">
      <ul className="saved-cities__list">
        {citiesList.map((obj: location, index: number) => (
          <li className="saved-cities__list-item" key={index}>
            {' '}
            <SavedCityItem {...obj} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SavedCities;
