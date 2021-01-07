import React from 'react'

import styles from './auth/styles'
import {Text, View} from 'react-native'
function TopHeader() {
    return (
        <View style = {{position: 'static', top: 0}}><Text style={styles.logo}>	Reactagram	</Text></View>
    )
}

export default TopHeader
