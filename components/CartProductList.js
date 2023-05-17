"use client"
import CartProductItem from "./CartProductItem";
export default function CartProductList({ products }){
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-4 justify-center mxauto gap-4 place-center flex-wrap w-100 md:max-w-[900px]">
            {products?.map((product) => (

                <CartProductItem key={product?.id} product={product} />

            ))}
        </div>
    );
}