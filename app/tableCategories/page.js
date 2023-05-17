import React from "react";
import AffTableCategories from "@/components/AffTableCategories";
async function getProducts() {
    const res = await fetch('http://localhost:3001/api/movie')
    const categories = await res.json();
    return categories;
}
const tableCategories = async () => {
    const categories = await getProducts();
    return (
        <div className="container mx-auto shadow p-4">
            <AffTableCategories categories={categories} />
        </div>
    )
}
export default tableCategories;
