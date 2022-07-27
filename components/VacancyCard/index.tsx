import React, { FC } from 'react'
import { View, Image, Text } from 'react-native'
import { IVacancy } from '../../types'
import { styles } from './styles'

interface Props {
    data: IVacancy
}

const VacancyCard: FC<Props> = ({ data }) => {
    return (
        <View style={styles.vacancyCard}>
            <Image
                source={{
                    uri: 'https://devkg.com/images/organizations/70efcd98369c2942cb4a5b965bec24f3.webp',
                }}
            />
            <View style={styles.vacancyCard}>
                <View style={styles.vacancyCardInfo}>
                    <Text style={styles.vacancyCardInfoLabel}>Компания</Text>
                    <Text style={styles.vacancyCardInfoText}>{data.position}</Text>
                </View>
                <View style={styles.vacancyCardInfo}>
                    <Text style={styles.vacancyCardInfoLabel}>Должность</Text>
                    <Text style={styles.vacancyCardInfoText}>{data.company_name}</Text>
                </View>
                <View style={styles.vacancyCardInfo}>
                    <Text style={styles.vacancyCardInfoLabel}>Оклад</Text>
                    <Text style={styles.vacancyCardInfoText}>2000 - 3000 USD в месяц</Text>
                </View>
                <View style={styles.vacancyCardInfo}>
                    <Text style={styles.vacancyCardInfoLabel}>Тип</Text>
                    <Text style={styles.vacancyCardInfoText}>{data.type}</Text>
                </View>
            </View>
        </View>
    )
}

export default VacancyCard
