import './Header.scss';
import '../../styles/btnStyle.scss';
import locationIcon from '../../assets/images/location-icon.svg';
import listIcon from '../../assets/images/list-icon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import SearchInput from '../SearchInput/SearchInput';
import { setSavedCitiesOpen } from '../../redux/savedCitiesList/slice';

const Header = () => {
  const { location } = useSelector((state: RootState) => state.weatherItem);
  const { savedCitiesOpen } = useSelector((state: RootState) => state.savedCitiesList);
  const dispatch = useDispatch();

  return (
    <section className="header">
      <div className="header__location-container">
        <button
          className="header__btn btn"
          onClick={() => {
            dispatch(setSavedCitiesOpen());
          }}>
          <img src={listIcon} alt="list icon" />
        </button>
        <div className="">
          <img src={locationIcon} alt="location icon" />
          <p>
            {location.name}, {location.country}
          </p>
        </div>
      </div>
      <div className="">{!savedCitiesOpen && <SearchInput />}</div>
    </section>
  );
};

export default Header;
