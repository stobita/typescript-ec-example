import {
  createStyles,
  GridList,
  GridListTile,
  GridListTileBar,
  makeStyles,
  Theme,
} from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Product } from 'backend/src/products/product.entity';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridList: {},
  }),
);

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    axios.get('http://localhost:8080/products').then((res) => {
      console.log(res.data);
      setProducts(res.data);
    });
  }, []);
  const classes = useStyles();
  return (
    <div>
      <GridList className={classes.gridList} cols={3}>
        {products.map((product) => (
          <GridListTile>
            <GridListTileBar title={product.name}></GridListTileBar>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
