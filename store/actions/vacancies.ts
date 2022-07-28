import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchVacancies = createAsyncThunk('vacancies/fetchVacancies', (_, thunkAPI) => {
    try {
        const res = fetch('https://devkg-api.herokuapp.com/api/vacanciess')
        return res
    } catch (e) {
        return thunkAPI.rejectWithValue('Не удалось загрузить вакансии')
    }
})
