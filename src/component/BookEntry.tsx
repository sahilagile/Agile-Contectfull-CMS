// src/components/BookEntry.tsx
import { useEffect, useState } from 'react'
import client from '../contentfulClients'

const BookEntry = () => {
  const [book, setBook] = useState<any>(null)
  console.log('book: ', book);

  useEffect(() => {
    client
      .getEntry('12JxojUpISa7wT2GXKJB8n')
      .then((entry) => {
        console.log('entry: ', entry);
        setBook(entry)
      })
      .catch(console.error)
  }, [])

  if (!book) return <div>Loading...</div>

  return (
    <div>
      <h2>{book?.fields?.name}</h2>
      {/* <p>{book?.fields?.description}</p> */}
    </div>
  )
}

export default BookEntry
