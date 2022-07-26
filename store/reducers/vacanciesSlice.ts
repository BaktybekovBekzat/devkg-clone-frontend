import { createSlice } from '@reduxjs/toolkit'
import { IVacancy } from '../../types'

interface IInitState {
    data: IVacancy[]
    error: boolean
    loading: boolean
}

const initialState: IInitState = {
    data: [],
    error: false,
    loading: true,
}

export const vacanciesSlice = createSlice({
    name: 'vacancies',
    initialState,
    reducers: {},
})

export default vacanciesSlice.reducer
