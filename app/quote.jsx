import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const quote = () => {
  const [quote, setQuote] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  const fetchQuote = async () => {
    try {
      setLoading(true)
      const response = await axios.get(url)
      console.log(response.data)
      if(response.data[0]) {
        setQuote(response.data[0])
      } else {
        throw new Error('Unable to access Quote')
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  if(loading) {
    return (
      <View style={styles.container}>
        <Text>
          Loading...
        </Text>
      </View>
    )
  }

  if(error) {
    return (
      <View style={styles.container}>
        <Text>
          {error}
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{quote.q}</Text>
      <Text style={styles.text}>~{quote.a}</Text>

      <Button
        onPress={fetchQuote}
        title='New Quote'
        color='gray'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  text:{
    fontSize: 24,
    borderColor: 'gray',
    borderWidth: 4,
    borderRadius: 10,
    fontWeight: 'bold',
    width: 400,
    marginBottom: 10,
    textAlign: 'center', 
    color: 'white'
  },
  author:{
    fontSize: 16,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 5,
    width: 200,
    marginBottom: 30,
    textAlign: 'center',
    color: 'white'
  },
  button: {
    width: 200,
    height: 100
  }
})

export default quote