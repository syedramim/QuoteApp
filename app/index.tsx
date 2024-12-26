import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { quotes } from './quote'

const index = () => {
  const generateNewQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)]
  }
  const [quote, setQuote] = useState(generateNewQuote())

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{quote.text}</Text>
      <Text style={styles.text}>{quote.author}</Text>

      <Button
        onPress={() => setQuote(generateNewQuote())}
        title='New Quote'
        
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    fontSize: 24,
    borderColor: 'black',
    borderWidth: 4,
    borderRadius: 10,
    fontWeight: 'bold',
    width: 400
    
  },
  author:{
    fontSize: 16,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    width: 200
  },
  button: {
    width: 200,
    height: 100
  }
})

export default index
