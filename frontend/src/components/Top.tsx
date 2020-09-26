import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import { ProductList } from './ProductList';

export const Top = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography>EC</Typography>
        </Toolbar>
      </AppBar>
      <ProductList></ProductList>
    </div>
  );
};
