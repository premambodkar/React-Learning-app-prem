import React from 'react';
import './style.css';
import EmployeeList from './Employee/EmployeeList.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <EmployeeList />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
