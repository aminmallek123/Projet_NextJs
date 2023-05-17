"use client"
import CartProductList from "@/components/CartProductList";
import React,{ useEffect, useState } from "react";
import axios from "axios";
export default function CartProductsPage()  {
    const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/api/movie').then((res) => {
        setProducts(res.data);
        console.log(products);
    })
  });
    return (
        <>

            <CartProductList products={products} />

        </>
    )
}