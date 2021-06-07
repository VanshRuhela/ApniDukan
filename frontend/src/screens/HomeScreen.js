import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Product from '../components/Product';

export default function HomeScreen() {

  const [products, setProducts] = useState([]);
  const[loading, setLoading] = useState(false);
  useEffect(() => {
   const fetchData = async () => {
     setLoading(true);
     const  { data } = await axios.get('/api/products');
     setLoading(false);
     setProducts(data);
    };
    fetchData();
  }, []);

    return (      
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
            ))}
      </div>
    );
}
