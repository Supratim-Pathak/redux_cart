import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { useEffect, useState } from "react";
import axios from "axios";

const Products = (props) => {
  // https://dummyjson.com/products?limit=10&select=title,description,price,thumbnail
  const [record, setRecord]=useState([])

  useEffect(()=>{
    axios.get('https://dummyjson.com/products?limit=10&select=title,description,price,thumbnail').then((rec)=>{
      setRecord(rec.data.products)
    }).catch((error)=>{
      console.log(error)
    })
  },[])

  console.log(record)
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {record.map((value, index)=>{
          return(
            <ProductItem
              id={value.id}
              key={index}
              title={value.title}
              price={value.price}
              description={value.description}
              image={value.thumbnail}
            />
          )
        })}
        
      </ul>
    </section>
  );
};

export default Products;
