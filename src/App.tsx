// src/App.jsx
import { useEffect, useState } from 'react'
import client from './contentfulClient'

function App() {
  const [entry, setEntry] = useState(null)

  useEffect(() => {
    client
      .getEntry('your_entry_id')
      .then((entry) => setEntry(entry.fields))
      .catch(console.error)
  }, [])

  return (
    <div>
      <h1>Contentful Entry:</h1>
      <pre>{entry ? JSON.stringify(entry, null, 2) : 'Loading...'}</pre>
    </div>
  )
}

export default App






// import { locations } from '@contentful/app-sdk';
// import { useSDK } from '@contentful/react-apps-toolkit';
// import { useMemo } from 'react';
// import ConfigScreen from './locations/ConfigScreen';
// import Dialog from './locations/Dialog';
// import EntryEditor from './locations/EntryEditor';
// import Field from './locations/Field';
// import Page from './locations/Page';
// import Sidebar from './locations/Sidebar';
// import Home from './locations/Home';

// const ComponentLocationSettings = {
//   [locations.LOCATION_APP_CONFIG]: ConfigScreen,
//   [locations.LOCATION_ENTRY_FIELD]: Field,
//   [locations.LOCATION_ENTRY_EDITOR]: EntryEditor,
//   [locations.LOCATION_DIALOG]: Dialog,
//   [locations.LOCATION_ENTRY_SIDEBAR]: Sidebar,
//   [locations.LOCATION_PAGE]: Page,
//   [locations.LOCATION_HOME]: Home,
// };

// const App = () => {
//   const sdk = useSDK();

//   const Component = useMemo(() => {
//     for (const [location, component] of Object.entries(ComponentLocationSettings)) {
//       if (sdk.location.is(location)) {
//         return component;
//       }
//     }
//   }, [sdk.location]);

//   return Component ? <Component /> : null;
// };

// export default App;
