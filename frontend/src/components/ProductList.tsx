import React from 'react';
import { List, Datagrid, TextField, DateField, NumberField } from 'react-admin';

interface Props {}

export const ProductList = (props: Props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <NumberField source="price" />
    </Datagrid>
  </List>
);
