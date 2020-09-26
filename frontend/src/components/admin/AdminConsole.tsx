import React from 'react';
import { Admin, Resource, fetchUtils } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import { ProductList } from './ProductList';
import { ProductEdit } from './ProductEdit';
import { ProductCreate } from './ProductCreate';
import authProvider from '../../adminAuthProvider';

export const AdminConsole = () => {
  const httpClient = (url: any, options: any = {}) => {
    if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
  };

  const dataProvider = restProvider('http://localhost:8080/admin', httpClient);
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
