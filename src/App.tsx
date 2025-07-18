// src/App.tsx

import BookEntry from "./component/BookEntry";
import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react";

const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const environment = import.meta.env.VITE_CONTENTFUL_ENVIRONMENT || "master";

function App() {
  return (
    <ContentfulLivePreviewProvider
      locale="en-US"
      space={spaceId}
      environment={environment}
    >
      <div>
        <h1>Book from Contentful</h1>
        <BookEntry />
      </div>
    </ContentfulLivePreviewProvider>
  );
}

export default App;
