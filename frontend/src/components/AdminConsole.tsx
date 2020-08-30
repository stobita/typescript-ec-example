import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import { ProductList } from './ProductList';
import { ProductEdit } from './ProductEdit';
import { ProductCreate } from './ProductCreate';
import authProvider from '../adminAuthProvider';

export const AdminConsole = () => {
  const dataProvider = restProvider('http://localhost:8080/admin');
  return (
    <Admin authProvider={authProvider} dataProvider={dataProvider}>
      <Resource
        name="products"
        list={ProductList}
        edit={ProductEdit}
        create={ProductCreate}
      ></Resource>
    </Admin>
  );
};
