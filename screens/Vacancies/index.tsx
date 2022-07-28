import React, { FC, useEffect, useState } from 'react'
import { FlatList, SafeAreaView, ActivityIndicator, Text } from 'react-native'
import VacancyCard from '../../components/VacancyCard'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { fetchVacancies } from '../../store/actions/vacancies'

const Vacancies: FC = () => {
    const { data: vacancies, error, loading } = useTypedSelector((state) => state.vacancies)
    const dispatch = useTypedDispatch()

    useEffect(() => {
        dispatch(fetchVacancies())
    }, [])

    return (
        <SafeAreaView>
            {!loading ? (
                <>
                    {error !== '' ? (
                        <FlatList
                            data={vacancies}
                            renderItem={(vacancy) => <VacancyCard data={vacancy.item} />}
                        />
                    ) : (
                        <Text>{error}</Text>
                    )}
                </>
            ) : (
                <ActivityIndicator size='large' />
            )}
        </SafeAreaView>
    )
}

export default Vacancies
