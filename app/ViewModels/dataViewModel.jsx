import AsyncStorage from '@react-native-async-storage/async-storage'

const dataViewModel = () => {
  const setQuoteArray = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value))
        console.log("Array has been created")
    } catch (err) {
        console.log(`ERROR: ${err}`)
    }
  }

  const getQuoteArray = async (key) => {
    try {
        const quotesArray = await AsyncStorage.getItem(key)

        if (quotesArray != null) {
            console.log(`Quotes Array: ${quotesArray}`)
            return JSON.parse(quotesArray)
        }
    } catch (err) {
        console.log(`ERROR: ${err}`)
    }
  }

  const resetQuotesArray = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
        console.log("Successfully Deleted Array")
    } catch (err) {
        console.log(`ERROR: ${err}`)
    }
  }

  const addItemToArray = async (key, value) => {
    try {
        const quotesArray = await AsyncStorage.getItem(key)
        const parsedQuotesArray = quotesArray ? JSON.parse(quotesArray) : []

        await AsyncStorage.setItem(key, JSON.stringify([...parsedQuotesArray, value]))
        console.log(`Added: ${value} to ${key}`)
    } catch (err) {
        console.log(`ERROR: ${err}`)
    }
  }

  const removeItemToArray = async (key, value) => {
    try {
        const quotesArray = await AsyncStorage.getItem(key)
        const parsedQuotesArray = quotesArray ? JSON.parse(quotesArray) : []

        if (parsedQuotesArray.length > 0) {
            console.log(value)
            await AsyncStorage.setItem(key, JSON.stringify(parsedQuotesArray.filter(val => val.q != value.q)))

            console.log(`Removed: ${value} from ${key}`)
        }
    } catch (err) {
        console.log(`ERROR: ${err}`)
    }
  }

  return {
    setQuoteArray,
    getQuoteArray,
    resetQuotesArray,
    addItemToArray,
    removeItemToArray
  }
}

export default dataViewModel