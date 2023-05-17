import { useShoppingCart } from "use-shopping-cart" ;
export default function CartItem({ item }) {
    const { removeItem } = useShoppingCart(); 
    const { title, Image,price } = item;
    const removeItemFromCart = () => {
        removeItem(item.id);
        }; 
       
    return (
        <div className="flex items-center gap-4 mb-3">
            <p>
                <img
                    src={Image}
                    width={40} height={40}
                    alt={title}
                />
            </p>
            <div>
                {title}
            </div>
            <div className="ml-auto">{price}DT</div>
            <button onClick={() => removeItemFromCart()} className="hover:bg-emerald-50 transition-colors rounded-full
duration-500 p-1">
                <img alt="delete icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNi9UU_WbT4p-tkW4CBlZyU3_xfCsU4I61hw&usqp=CAU" width={25}
                    height={25} />
            </button>
        </div>
    );
} 
