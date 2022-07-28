import { combineReducers, configureStore } from '@reduxjs/toolkit'
import vacanciesReducer from './reducers/vacanciesSlice'

const rootReducer = combineReducers({
    vacancies: vacanciesReducer,
})

const makeStore = () => {
    const store = configureStore({
        reducer: rootReducer,
    })

    return store
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export default makeStore
