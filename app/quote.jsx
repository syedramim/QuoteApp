import { View, StyleSheet } from 'react-native'
import { Button, Card, Text } from 'react-native-paper'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CategoryPicker from './picker'

const quote = () => {
  const [quote, setQuote] = useState()
  const [category, setCategory] = useState('age')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const url = `${process.env.EXPO_PUBLIC_BASE_URL}?category=${category}`

  const fetchQuote = async () => {
    try {
      setLoading(true)
      const response = await axios.get(url, 
        {headers: {'X-Api-Key': process.env.EXPO_PUBLIC_API_KEY}}
      )
      console.log(category)

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
      <View>
        <Text>
          Loading...
          {console.log(url)}
        </Text>
      </View>
    )
  }

  if(error) {
    return (
      <View>
        <Text>
          {error}
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <CategoryPicker category={category} onCategoryChange={setCategory}/>

      <Card>
        <Card.Title title="Quote"/>
        <Card.Content>
          <Text variant='titleLarge'>{quote.quote}</Text>
          <Text variant='bodyMedium'>{quote.author}</Text>
        </Card.Content>
      </Card>

      <Button
        onPress={fetchQuote}
        mode='elevated'
        loading = {loading}
      > 
        New Quote
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 40,
    alignContent: 'center',
    alignItems: 'center'
  }
})

export default quote