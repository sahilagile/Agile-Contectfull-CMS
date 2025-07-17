// src/components/BookEntry.tsx
import { useEffect, useState } from 'react'
import client from '../contentfulClients'

const BookEntry = () => {
  const [book, setBook] = useState<any>(null)

  useEffect(() => {
    client
      .getEntry('12JxojUpISa7wT2GXKJB8n')
      .then((entry) => {
        setBook(entry)
      })
      .catch(console.error)
  }, [])

  if (!book) return <div>Loading...</div>

  return (
    <div>
      <h2>{book?.fields?.title}</h2>
      <p>{book?.fields?.description}</p>
    </div>
  )
}

export default BookEntry
