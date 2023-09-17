import './App.css'
import 'semantic-ui-css/semantic.min.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './routes/ErrorPage/index.jsx'
import SimpleForm from './routes/SimpleForm/index.jsx'
import HomePage from './routes/HomePage'
import Segments from './routes/Segments'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage></HomePage>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/form',
        element: <SimpleForm />,
      },
      {
        path: '/segments',
        element: <Segments />,
      },
    ],
  },
])

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
