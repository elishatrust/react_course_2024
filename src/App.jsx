import 
{
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

import React from 'react'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import AddJob from './pages/AddJob';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />} >
    <Route index element={<HomePage />} />
    <Route path='/jobs' element={<JobsPage />} />
    <Route path='/add-job' element={<AddJob />} />
    <Route path='*' element={<NotFoundPage />} />
  </Route>)
);
const App = () => {
  return <RouterProvider router={router} />;
}

export default App;