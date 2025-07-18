// src/components/BookEntry.tsx
import { useEffect, useState } from 'react'
import { useContentfulLiveUpdates } from '@contentful/live-preview/react'
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

  // Apply live updates to the fetched entry
  const updatedBook = useContentfulLiveUpdates(book)

  if (!updatedBook) return <div>Loading...</div>

  return (
    <div>
      <h2>{updatedBook?.fields?.name}</h2>
      {/* <p>{updatedBook?.fields?.description}</p> */}
    </div>
  )
}

export default BookEntry