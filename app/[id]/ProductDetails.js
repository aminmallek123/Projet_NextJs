import React from 'react'
import { notFound } from "next/navigation";
async function getProductDetails(id) {
    try {
        const res = await fetch
            (`http://localhost:3001/api/movie/${id}`);
        const product = await res.json();
        return product;
    }
    catch (error) {
        console.log(error);
    }
}
const ProductDetails = async ({ params }) => {
    const product = await getProductDetails(params.id);
    if (!product || !product?.title) notFound();

    return (<>
        <header class="bg-dark py-5">
    <div class="container px-5">
        <div class="row gx-5 align-items-center justify-content-center">
            <div class="col-lg-8 col-xl-7 col-xxl-6">
                <div class="my-5 text-center text-xl-start">
                    <p class="display-5 fw-bolder text-white mb-2">Title: {product.title}</p><br/>
                    <p class="lead fw-bolder text-white-50 mb-4">Description : <br/>{product.description}</p>
                    <br/>
                    <p class="lead fw-bolder text-white-50 mb-4">Année de production : {product.date_creation}</p>
                    <br/>
                    <p class="lead fw-bolder text-white-50 mb-4">Type de film : {product.categorie}</p>
                    <br/>
                </div>
            </div>
            <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img class="img-fluid rounded-3 my-5" src={`${product.Image}`} alt="..." /></div>
        </div>
        <iframe width="1000" height="480" src={`${product.video}`} title="KASO - MENGHIR SBAB" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    
</header>
</>
    )
}
export default ProductDetails