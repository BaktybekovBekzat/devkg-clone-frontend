import React, { FC, useState } from 'react'
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native'
import Modal from 'react-native-modal'
import { Link } from '@react-navigation/native'
const logo = require('../../assets/images/header/logo.svg')
const burger = require('../../assets/images/header/burger.svg')
const login = require('../../assets/images/header/login-icon.png')

const Header: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <View style={styles.header}>
            <TouchableOpacity>
                <Link to='/'>
                    <Image source={logo} style={{ width: 105, height: 38 }} />
                </Link>
            </TouchableOpacity>
            <View style={styles.headerRight}>
                <TouchableOpacity onPress={toggleMenu}>
                    <Image source={burger} style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={login} style={{ width: 38, height: 38 }} />
                </TouchableOpacity>
            </View>
            <Modal
                isVisible={isMenuOpen}
                animationIn='slideInRight'
                animationOut='slideInRight'
                hasBackdrop={true}
                backdropColor='#fff'
                backdropOpacity={10}
                animationInTiming={10}
                animationOutTiming={100}
                backdropTransitionInTiming={0}
                backdropTransitionOutTiming={0}>
                <Text>Menu</Text>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: '25px',
    },
})

export default Header
