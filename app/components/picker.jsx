import { StyleSheet, View, Text } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import React from 'react'
import { categories } from '../categories'
import { deviceDimensions } from '../deviceDimensions' 

/* This component is no longer being used due to the API requiring premium to select category.
   But if the user wants to get premium on api-ninjas then feel free to utilize this component to allow for choosing quote categories.
*/

const CategoryPicker = ({ userCategory, onCategoryChange }) => {
  const { width } = deviceDimensions()

  return (
    <View style={[styles.container, { width: width * 0.9 }]}>
      <Text style={styles.text}>Choose a Quote Category</Text>

      <Picker selectedValue={userCategory} onValueChange={onCategoryChange}>
        {
          categories.map((category) => (
            <Picker.Item  label={category.label} value={category.value} key={category.key} />
          ))
        }
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20, 
    padding: 16, 
    backgroundColor: '#f9f9f9', 
    borderRadius: 10, 
    alignSelf: 'center', 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, 
  },
  text: {
    fontSize: 18, 
    fontWeight: '600', 
    textAlign: 'center', 
    marginBottom: 10,
    color: '#333', 
  },
  picker: {
    fontSize: 16, 
    color: '#333', 
    backgroundColor: '#fff', 
    paddingVertical: 12, 
    paddingHorizontal: 10, 
    borderRadius: 8, 
    borderWidth: 1,
    borderColor: '#ccc', 
  },
});

export default CategoryPicker;
