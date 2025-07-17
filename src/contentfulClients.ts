// src/contentfulClient.ts
import { createClient } from 'contentful'

const client = createClient({
  // space: 'lzymgsr5ivck',
  // accessToken: 'jQ681NEvruUA8kEGxg_Mc-5cgfAQwF3lo-41lxVduuc',
   space: import.meta.env.VITE_CONTENTFUL_SPACE_ID!,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN!,
  host: 'https://api.contentful.com/',
  // host: 'preview.contentful.com',
})

export default client