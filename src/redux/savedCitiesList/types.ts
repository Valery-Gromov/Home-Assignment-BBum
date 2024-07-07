import { location } from '../weatherItem/types';

export interface savedCitiesListState {
  citiesList: location[];
  savedCitiesOpen: boolean;
}
