import { View, StyleSheet } from 'react-native';
import { Button, Card, Text, Appbar } from 'react-native-paper';
import { HeartIcon as Heart } from 'react-native-heroicons/outline';
import quoteViewModel from './ViewModels/quotesAPI';
import Spacer from './components/Spacer';
import { useData } from './ViewModels/DataViewModel'

const Quote = () => {
  const { quote, loading, error, fetchQuote } = quoteViewModel();
  const { addFavorite } = useData();

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{`ERROR: ${error}`}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
        <Appbar.Content title="Quotes" titleStyle={styles.title} />
      </Appbar.Header>

      <Spacer />

      <Card style={styles.card}>
        <Card.Title title={quote.author} titleStyle={styles.cardTitle} />
        <Card.Content>
          <Text variant="titleLarge" style={styles.quoteText}>
            {quote.quote}
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button
            icon={Heart}
            mode="elevated"
            onPress={() => addFavorite({ q: quote.quote, a: quote.author })}
            style={styles.button}
            textColor="#FFFFFF"
          >
            Add To Favorites
          </Button>
        </Card.Actions>
      </Card>

      <Spacer />

      <Button
        onPress={fetchQuote}
        mode="elevated"
        loading={loading}
        style={styles.newQuoteButton}
        textColor="#FFFFFF"
      >
        New Quote
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D3142',
    padding: 16,
  },
  appbar: {
    backgroundColor: '#2D3142',
  },
  title: {
    color: '#F5F5F5',
    fontSize: 20,
    fontWeight: 'bold',
  },
  loadingText: {
    color: '#F5F5F5',
    textAlign: 'center',
    marginTop: 16,
  },
  errorText: {
    color: '#EF8354',
    textAlign: 'center',
    marginTop: 16,
  },
  card: {
    marginBottom: 16,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    color: '#2D3142',
    fontWeight: 'bold',
  },
  quoteText: {
    color: '#2D3142',
    marginBottom: 8,
  },
  authorText: {
    color: '#2D3142',
    fontStyle: 'italic',
  },
  button: {
    backgroundColor: '#EF8354',
  },
  newQuoteButton: {
    backgroundColor: '#EF8354',
    borderRadius: 8,
    padding: 10,
    marginTop: 16,
  },
});

export default Quote;
