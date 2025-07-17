// src/components/BookEntry.tsx
import { useEffect, useState } from 'react'
import type { Entry } from 'contentful'
import type { BookFields } from '../types/Book'
import client from '../contentfulClient'

const BookEntry = () => {
  const [book, setBook] = useState<Entry<BookFields> | null>(null)

  useEffect(() => {
    client
      .getEntry<BookFields>('12JxojUpISa7wT2GXKJB8n')
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
