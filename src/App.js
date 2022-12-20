import React from 'react';
import './style.css';
import EmployeeList from './Employee/EmployeeList.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddUpdatemployee from './Employee/AddUpdatemployee.js';
import NotFound from './NotFound/NotFound.js';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <EmployeeList />,
      errorElement: <NotFound />,
    },
    {
      path: '/employee',
      element: <AddUpdatemployee />,
    },
    {
      path: '/employee/:id',
      element: <AddUpdatemployee />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
