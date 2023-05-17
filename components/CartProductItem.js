"use client";
import { useShoppingCart } from "use-shopping-cart" ; 
export default function CartProductItem ({ product }){
    const { addItem } = useShoppingCart(); 
    const addToCart = () => {
        addItem(product);
        };        
    return (

        <article className="flex flex-col gap-3 bg-white rounded-xl shadow-md
text-center mb-6">
            <div className="text-8xl cursor-default">
                <img
                    src={product?.Image}
                    className="card-img-top p-5"
                    alt={product.title} />
            </div>
            <div className="text-lg">{product.title}</div>
            <div className="text-2xl font-semibold mt-auto">{product.price} DT</div>
            <button onClick={() => addToCart()} className="bg-emerald-50 hover:bg-emerald-500 hover:text-white
transition-colors duration-500 text-emerald-500 rounded-md px-5 py-2">
                Add to cart
            </button>
        </article>

    );
}