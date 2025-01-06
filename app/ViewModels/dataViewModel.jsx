import { useState, useEffect, useContext, createContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const FavoritesContext = createContext()

export const DataViewModel = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const getQuoteArray = async () => {
      try {
          const quotesArray = await AsyncStorage.getItem('@QuotesArray')
          if (quotesArray != null) {
            setFavorites(JSON.parse(quotesArray))
            console.log(`Loading Favorites: ${favorites}`)
          } else {
            setFavorites([])
          }
      } catch (err) {
          console.log(`ERROR: ${err}`)
      }
    }

    getQuoteArray()
  }, [])

  useEffect(() => {
    const setQuoteArray = async () => {
      try {
          await AsyncStorage.setItem('@QuotesArray', JSON.stringify(favorites))
          console.log(`Favorites Changed to: ${favorites}`)
      } catch (err) {
          console.log(`ERROR: ${err}`)
      }
    }

    setQuoteArray()
  }, [favorites])

  const addFavorite = (quote) => {
    if (!quote) return

    if(!favorites.some((fav) => fav.q === quote.q)){
      setFavorites([...favorites, quote])
    }
  }

  const removeFavorite = (quote) => {
    if (!quote) return

    setFavorites(favorites.filter(val => val.q !== quote.q))
  }

  const resetFavorites = () => {
    setFavorites([])
  }

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, resetFavorites}}>
      {children}
    </FavoritesContext.Provider>
  )
    
}

export const useData = () => useContext(FavoritesContext)