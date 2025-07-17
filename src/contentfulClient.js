// src/contentfulClient.js
import { createClient } from 'contentful'

const client = createClient({
  space: lzymgsr5ivck,
  accessToken: 'jQ681NEvruUA8kEGxg_Mc-5cgfAQwF3lo-41lxVduuc',
  host: 'preview.contentful.com', // Use 'preview.contentful.com' if using preview token

//    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
//    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN, // Use 'preview.contentful.com' if using preview token
//    host: 'preview.contentful.com',
})

export default client
