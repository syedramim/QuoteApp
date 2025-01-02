import { View, StyleSheet } from 'react-native'
import { Appbar, Card, Text, Button } from 'react-native-paper'
import React, { useEffect, useState } from 'react'
import dataViewModel from '../ViewModels/dataViewModel'


const favorites = () => {
  const dataVM = dataViewModel()
  const [favoriteQuotes, setFavoriteQuotes] = useState([])
  
  useEffect(() => {
    const fetchFavorites = async () => {
      const favorites = await dataVM.getQuoteArray("@test")
      setFavoriteQuotes(favorites || [])
    } 
    
    fetchFavorites()
  }, [])

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title='Favorites' />
      </Appbar.Header>

      {
        favoriteQuotes && favoriteQuotes.length > 0 ? (favoriteQuotes.map((quote, index) => (
          <Card key={index}>
            <Card.Title title={quote.a}/>
            <Card.Content>
              <Text variant='titleLarge'>{quote.q}</Text>
            </Card.Content>

            <Card.Actions>
              <Button onPress={() => dataVM.removeItemToArray('@test', {"q": quote.q, "a":quote.a})}>
                Delete
              </Button>
            </Card.Actions>
          </Card>

        ))) : (
          <Text>
            No Favorites Added
          </Text>
        )
      }

      <Button mode="contained" onPress={() => dataVM.resetQuotesArray("@test")}>
        Reset Favorites
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
})

export default favorites