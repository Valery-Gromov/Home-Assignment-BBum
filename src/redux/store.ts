import { configureStore } from '@reduxjs/toolkit'
import weatherItemReducer from './weatherItem/slice'
import savedCitiesListReducer from './savedCitiesList/slice'
import searchReducer from './search/slice'

export const store = configureStore({
  reducer: {
      weatherItem: weatherItemReducer,
      savedCitiesList: savedCitiesListReducer,
      search: searchReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch