import { View, StyleSheet } from 'react-native'
import { Button, Card, Text, Appbar } from 'react-native-paper'
import { HeartIcon as Heart } from "react-native-heroicons/outline";
import deviceDimensions from './deviceDimensions'
import quoteViewModel from './ViewModels/quotesAPI'
import Spacer from './components/Spacer'
import dataViewModel from './ViewModels/dataViewModel'


const quote = () => {
  const { width, height} = deviceDimensions()
  const { quote, loading, error, fetchQuote } = quoteViewModel()
  const dataVM = dataViewModel()

  if(loading) {
    return (
      <View>
        <Text>
          Loading...
        </Text>
      </View>
    )
  }

  if(error) {
    return (
      <View>
        <Text>
          {`ERROR: ${error}`}
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>

      <Appbar.Header>
        <Appbar.Content title="Quotes" />
      </Appbar.Header>

      <Spacer />

      <Card>
        <Card.Title title="Quote"/>
        <Card.Content>
          <Text variant='titleLarge'>{quote.quote}</Text>
          <Text variant='bodyMedium'>{quote.author}</Text>
        </Card.Content>
        <Card.Actions>
          <Button 
            icon={Heart} 
            mode='elevated' 
            onPress={() => dataVM.addItemToArray("@test", {q:quote.quote, a: quote.author})}
          >
            Add To Favorites
          </Button>
        </Card.Actions>
      </Card>

      <Spacer />

      <Button
        onPress={fetchQuote}
        mode='elevated'
        loading = {loading}
        style={{marginBottom: height*0.005}}
      > 
        New Quote
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  spacer: {
    flex: 1
  },
  
})

export default quote