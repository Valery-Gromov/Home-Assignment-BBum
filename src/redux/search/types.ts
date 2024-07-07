import { location } from '../weatherItem/types';

export interface searchState {
  suggestions: location[] | [];
  query: string;
}