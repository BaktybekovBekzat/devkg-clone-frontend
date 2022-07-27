import React, { FC, useEffect, useState } from 'react'
import { FlatList, SafeAreaView, ActivityIndicator } from 'react-native'
import { vacanyAPI } from '../../services/VacancyService'
import VacancyCard from '../../components/VacancyCard'

const Vacancies: FC = () => {
    const { data: vacancies, isLoading } = vacanyAPI.useFetchAllVacanciesQuery(15)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!isLoading) {
            setTimeout(() => setLoading(false), 1000)
        }
    }, [isLoading])

    return (
        <SafeAreaView>
            {!loading ? (
                <FlatList
                    data={vacancies}
                    renderItem={(vacancy) => <VacancyCard data={vacancy.item} />}
                />
            ) : (
                <ActivityIndicator size='large' />
            )}
        </SafeAreaView>
    )
}

export default Vacancies
