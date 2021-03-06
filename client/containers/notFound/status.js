import React from 'react';
import { Route } from 'react-router-dom';

const Status = ({ status, children }) => {
  return (
    <Route render={({ staticContext }) => {
      if (staticContext) {
        staticContext.status = status;
      }
      return children;
    }}/>
  );
};

export default Status;
