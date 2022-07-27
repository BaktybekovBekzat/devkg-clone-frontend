import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    vacancyCard: {
        display: 'flex',
        backgroundColor: '#f1f4f9',
        color: '#191f5d',
        marginBottom: 2,
        padding: 10,
    },
    vacancyCardImage: {
        width: 32,
        height: 32,
    },
    vacancyCardRight: {
        display: 'flex',
        flexDirection: 'column',
        paddingRight: 10,
    },
    vacancyCardInfo: {
        display: 'flex',
        flexDirection: 'column',
    },
    vacancyCardInfoLabel: {
        fontSize: 14,
        color: '#a7b0c2',
        marginBottom: 2,
    },
    vacancyCardInfoText: {
        fontSize: 16,
        fontWeight: '700',
    },
})
