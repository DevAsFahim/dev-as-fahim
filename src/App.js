import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import ProjectDetails1 from './components/Projects/ProjectDetails1';
import ProjectDetails2 from './components/Projects/ProjectDetails2';
import ProjectDetails3 from './components/Projects/ProjectDetails3';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/project/1',
        element: <ProjectDetails1></ProjectDetails1>
      },
      {
        path: '/project/2',
        element: <ProjectDetails2></ProjectDetails2>
      },
      {
        path: '/project/3',
        element: <ProjectDetails3></ProjectDetails3>
      }
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router}>
      </RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
