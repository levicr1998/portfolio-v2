import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import * as React from 'react';
import { Home } from './pages/Home';
import * as contentful from 'contentful';
import { ContentfulContext } from './context/ContentfulContext';
import { Project } from './pages/Project';
import { projectLoader } from './helpers';

function App() {
  const client = contentful.createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
  });

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: 'projects/:projectId',
      element: <Project />,
      loader: projectLoader
    }
  ]);

  return (
    <div>
      <ContentfulContext.Provider value={client}>
        <RouterProvider router={router} />
      </ContentfulContext.Provider>
    </div>
  );
}

export default App;
