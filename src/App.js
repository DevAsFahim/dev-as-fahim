import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
