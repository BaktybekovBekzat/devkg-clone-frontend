import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IVacancy } from '../../types'
import { fetchVacancies } from '../actions/vacancies'

interface IInitState {
    data: IVacancy[]
    error: string
    loading: boolean
}

const initialState: IInitState = {
    data: [],
    error: '',
    loading: true,
}

export const vacanciesSlice = createSlice({
    name: 'vacancies',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchVacancies.fulfilled.type]: (state, action: PayloadAction<IVacancy[]>) => {
            state.loading = false
            state.error = ''
            state.data = action.payload
        },
        [fetchVacancies.pending.type]: (state) => {
            state.loading = true
        },
        [fetchVacancies.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },
    },
})

export default vacanciesSlice.reducer
