import { View, StyleSheet, ScrollView } from 'react-native';
import { Appbar, Card, Text, Button } from 'react-native-paper';
import React from 'react';
import { useData } from '../ViewModels/DataViewModel';

const Favorites = () => {
  const { favorites, removeFavorite, resetFavorites } = useData()

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
        <Appbar.Content title="Favorites" titleStyle={styles.title} />
      </Appbar.Header>

      <ScrollView style={styles.content}>
        {favorites && favorites.length > 0 ? (
          favorites.map((quote, index) => (
            <Card key={index} style={styles.card}>
              <Card.Title title={quote.a} titleStyle={styles.cardTitle} />
              <Card.Content>
                <Text variant="titleLarge" style={styles.quoteText}>{quote.q}</Text>
              </Card.Content>
              <Card.Actions>
                <Button
                  onPress={() => removeFavorite({ q: quote.q, a: quote.a })}
                  style={styles.button}
                  textColor="#FFFFFF"
                >
                  Delete
                </Button>
              </Card.Actions>
            </Card>
          ))
        ) : (
          <Text style={styles.noFavorites}>No Favorites Added</Text>
        )}
      </ScrollView>

      <Button
        mode="contained"
        onPress={resetFavorites}
        style={styles.resetButton}
        textColor="#FFFFFF"
      >
        Reset Favorites
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
  content: {
    flex: 1,
    paddingTop: 16,
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
  },
  button: {
    backgroundColor: '#EF8354',
  },
  noFavorites: {
    color: '#F5F5F5',
    textAlign: 'center',
    marginTop: 16,
  },
  resetButton: {
    backgroundColor: '#EF8354',
    borderRadius: 8,
    padding: 10,
    marginTop: 16,
  },
});

export default Favorites;
