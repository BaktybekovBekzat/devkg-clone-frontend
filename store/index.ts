import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { vacanyAPI } from '../services/VacancyService'
import vacanciesReducer from './reducers/vacanciesSlice'

const rootReducer = combineReducers({
    vacancies: vacanciesReducer,
    [vacanyAPI.reducerPath]: vacanyAPI.reducer,
})

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(vacanyAPI.middleware),
})

export type RootState = ReturnType<typeof rootReducer>

export default store
