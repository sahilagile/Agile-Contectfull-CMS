// netlify/functions/create-entry.js
const { createClient } = require("contentful-management");

exports.handler = async function () {
  const client = createClient({
    accessToken: import.meta.env.CONTENTFUL_CMA_TOKEN,
  });

  try {
    const space = await client.getSpace(import.meta.env.CONTENTFUL_SPACE_ID);
    const env = await space.getEnvironment("master");

    const entry = await env.createEntry("blogPost", {
      fields: {
        title: { "en-US": "Created from Netlify Function" },
        body: {
          "en-US": "This content was created via secure Netlify Function.",
        },
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ id: entry.sys.id }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
