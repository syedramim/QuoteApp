import { useState, useEffect } from 'react'
import axios from 'axios'

const quoteViewModel = () => {
    const [quote, setQuote] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
  
    const url = `${process.env.EXPO_PUBLIC_BASE_URL}`
    
    const fetchQuote = async () => {
      try {
        setLoading(true)
        const response = await axios.get(url, 
          {headers: {'X-Api-Key': process.env.EXPO_PUBLIC_API_KEY}}
        )
  
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

    return { quote, loading, error, fetchQuote }
}

export default quoteViewModel