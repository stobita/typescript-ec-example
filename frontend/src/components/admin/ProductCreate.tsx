import React from 'react';
import { Create, TextInput, NumberInput, SimpleForm } from 'react-admin';

interface Props {}

export const ProductCreate = (props: Props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <NumberInput source="price" />
    </SimpleForm>
  </Create>
);
