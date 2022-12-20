import { useRouteError } from 'react-router-dom';
import React from 'react';

const NotFound = () => {
  const error = useRouteError();
  return (
    <div>
      <span>Route Not Found</span>
      <span>{error.error}</span>
    </div>
  );
};

export default NotFound;
