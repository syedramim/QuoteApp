import React from "react"
import { View } from 'react-native'

const Spacer = ({size}) => {
    return (
        <View style={{ flex: size || 1}} />
    )
}

export default Spacer