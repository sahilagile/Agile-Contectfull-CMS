// src/contentfulClient.ts
import { createClient } from 'contentful'

const isPreview = new URLSearchParams(window.location.search).get('preview') === '1';
const token = isPreview
  ? import.meta.env.VITE_CONTENTFUL_PREVIEW_TOKEN
  : import.meta.env.VITE_CONTENTFUL_DELIVERY_TOKEN;

const host = isPreview ? 'preview.contentful.com' : 'https://api.contentful.com/';

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: token,
  host,
});

export default client

// const client = createClient({
//   // space: 'lzymgsr5ivck',
//   // accessToken: 'jQ681NEvruUA8kEGxg_Mc-5cgfAQwF3lo-41lxVduuc',
//    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID!,
//   accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN!,
//   host: 'https://api.contentful.com/',
//   // host: 'preview.contentful.com',
// })



// const isPreview = new URLSearchParams(window.location.search).get('preview') === '1';
// const token = isPreview
//   ? import.meta.env.VITE_CONTENTFUL_PREVIEW_TOKEN
//   : import.meta.env.VITE_CONTENTFUL_DELIVERY_TOKEN;

// const host = isPreview ? 'preview.contentful.com' : 'https://api.contentful.com/';

// const client = createClient({
//   space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
//   accessToken: token,
//   host,
// });
