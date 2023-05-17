"use client";
import { useState } from "react";
import CartItem from "./CartItem";
import { useShoppingCart } from "use-shopping-cart";
import axios from "axios";
export default function ShoppingCart() {

    const { shouldDisplayCart, cartCount, cartDetails, totalPrice } = useShoppingCart();
    const [status, setStatus] = useState("idle");
    const items = Object.values(CartItem);
    async function handleClick(event) {
        const items = Object.values(cartDetails)
        event.preventDefault();
        if (cartCount > 0) {
            setStatus("loading");
            try {
                axios.post('api/checkout_sessions', items)
                    .then(res => {
                        console.log(res);
                        window.location = res.data.sessionURL;
                    })
                    .catch(err => { console.log(err); setStatus("redirect-error"); })
            } catch (error) {
                console.error(error);
                setStatus("redirect-error");
            }
        } else {
            setStatus("no-items");
        }
    }

    return (
        <div
            className={`bg-white flex flex-col absolute right-3 md:right-9 top-14 w-
    80 py-4 px-4 shadow-[0_5px_15px_0_rgba(0,0,0,.15)] rounded-md transition-
    opacity duration-500 ${shouldDisplayCart ? "opacity-100" : "opacity-0"
                }`}
        >

            {cartCount && cartCount > 0 ? (
                <>
                Total : {totalPrice.toFixed(2)}
                    {Object.values(cartDetails ?? {}).map((entry) => (
                        <CartItem key={entry.id} item={entry} />
                    ))}

                    <article className="mt-3 flex flex-col">
                        <div className="text-red-700 text-xs mb-3 h-5 text-center">
                            {totalPrice && totalPrice < 30
                                ? "Vous devez avoir au moins 10 DT dans votre panier"
                                : cartCount && cartCount > 20
                                    ? "Vous ne pouvez pas avoir plus de 20 articles"
                                    : status === "redirect-error"
                                        ? "Impossible de rediriger vers la page de paiement Stripe"
                                        : status === "no-items"
                                            ? "Veuillez ajouter quelques articles à votre panier"
                                            : null}
                        </div>
                        <button onClick={handleClick}
                            className="bg-emerald-50 hover:bg-emerald-500 
hover:text-white transition-colors duration-500 text-emerald-500 py-3 px-5 
rounded-md w-100" disabled={
                                (totalPrice && totalPrice < 30) ||
                                    (cartCount && cartCount > 20) ||
                                    status == "no-items"
                                    ? true
                                    : false
                            } >
                            {status !== "loading" ? "Proceed to checkout" :
                                "Loading..."}
                        </button>
                    </article>
                </>
            ) : (
                <div className="p-5">Vous n'avez aucun article dans votre panier</div>
            )}
        </div>

    );
}