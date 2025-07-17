export const createEntry = async () => {
  const res = await fetch('/.netlify/functions/create-entry', {
    method: 'POST',
  });

  if (!res.ok) throw new Error('Failed to create entry');
  return await res.json();
};





// // backend/api/createEntry.ts
// import { createClient } from 'contentful-management';

// const client = createClient({
//   accessToken: import.meta.env.CONTENTFUL_CMA_TOKEN as string,
// });

// export const createContentfulEntry = async () => {
//   const space = await client.getSpace(import.meta.env.VITE_CONTENTFUL_SPACE_ID);
//   const environment = await space.getEnvironment('master');

//   const entry = await environment.createEntry('blogPost', {
//       fields: {
//           title: {
//               'en-US': 'My new post',
//             },
//             body: {
//                 'en-US': 'This is the content of the post.',
//             },
//         },
//     });
//     console.log('entry: ', entry);

//   return entry;
// };
