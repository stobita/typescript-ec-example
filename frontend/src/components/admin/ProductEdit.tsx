import React from 'react';
import { Edit, TextInput, NumberInput, SimpleForm } from 'react-admin';

interface Props {}

export const ProductEdit = (props: Props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <NumberInput source="price" />
    </SimpleForm>
  </Edit>
);
