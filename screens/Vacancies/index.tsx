import React, { FC, useEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { vacanyAPI } from '../../services/VacancyService'

const Vacancies: FC = () => {
    const { data: vacancies } = vacanyAPI.useFetchAllVacanciesQuery(15)

    useEffect(() => {
        vacancies?.forEach((el) => {
            console.log(el.position)
        })
    }, [])

    return <SafeAreaView>SIUUUUUUU</SafeAreaView>
}

export default Vacancies
