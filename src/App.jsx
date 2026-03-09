// App.jsx — Root component of the application
// Acts as the main entry point for all components and routing

import PhotoGallery from './components/PhotoGallery/PhotoGallery'
// Imports the PhotoGallery component from the components folder
// Path: src/components/PhotoGallery/PhotoGallery.jsx

export default function App() {
// Defines the App component as a default export
// 'default export' means it can be imported with any name in other files
// This is the top-level component rendered in index.jsx

  return <PhotoGallery />
  // Renders the PhotoGallery component as the entire app
  // Whatever PhotoGallery displays will be shown on the screen
  // No routing or layout wrapper — PhotoGallery IS the whole app

}
// End of App component