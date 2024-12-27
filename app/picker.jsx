import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import RNPickerSelect from 'react-native-picker-select'
import { categories } from './categories'

const CategoryPicker = ({userCategory, onCategoryChange}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Choose a Quote Category: </Text>

        <RNPickerSelect
            onValueChange={onCategoryChange}
            value={userCategory}
            items={categories}
            style={{
                inputAndroid: styles.pickerStyle,
                inputIOS: styles.pickerStyle,
                style: styles.pickerStyle
            }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'gray',
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 5,
        flexDirection: 'row',
        width: 400,
        justifyContent: 'center'
    },
    text: {
        paddingRight: 100,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    pickerStyle: {
        height: 100,
        width: 100,
        fontSize: 30
    }

})

export default CategoryPicker