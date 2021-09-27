import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import ProductsLists from './ProductsLists';
import StepHeaders from './StepHeaders';
import './styles.css'
import { Product } from './types';

function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div className="orders-container">
            <StepHeaders />
            <ProductsLists products={products}/>
        </div>
    )
}

export default Orders;