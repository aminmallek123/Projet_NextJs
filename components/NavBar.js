"use client"
import React from "react";
import { useRouter } from "next/navigation";
import Button from '@mui/material/Button';
import { useSession, signOut, signIn } from 'next-auth/react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useShoppingCart } from "use-shopping-cart" ;
import ShoppingCart from "./ShoppingCart";
export default function NavBar() {
    const router = useRouter();
    const {data} = useSession();
    const { handleCartClick,cartCount } = useShoppingCart(); 

    return (

        <nav className='flex items-center flex-wrap bg-current '>
            <button className='inline-flex items-center p-2 mr-4 ' onClick={() => router.push('/home')}>
                <svg
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    className='fill-current text-white h-8 w-8 mr-2'
                >
                    <path d='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYj4xaPLrqmN_5-vj-Ya48wsiC1bP9JjS1Q&usqp=CAU' />
                </svg>
                <span className='text-xl text-white font-bold uppercase tracking-wide'>
                    Neteflixy
                </span>
            </button>
            <button className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'>
                <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6h16M4 12h16M4 18h16'
                    />
                </svg>
            </button>

            {data?.user ? (<div className='hidden w-full lg:inline-flex lg:flex-grow lg:w-auto'>
                <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>

                    <button className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white ' onClick={() => router.push('/tableCategories')}>
                       CRUD admin
                    </button>
                    <button className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white' onClick={() =>
                        signOut()}> Déconnexion </button>
                </div>
            </div>
            ) : <><button className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white' onClick={() => router.push('/')}>
               <FontAwesomeIcon icon="fa-solid fa-film" style={{color: "#f5f5f5",}} /> Movie
            </button>
            <Button className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white" onClick={() =>
                router.push('/cartProducts')}><ShoppingBasketIcon style={{ color: 'white' }} />
                 Achat d'un film </Button>
            <button className="relative" onClick={() => handleCartClick()}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8J-ZC-TWCe-pVn_0yS9EeTPXg0SxBMSHSmw&usqp=CAU" width={40}
                    height={40}
                    alt="shopping cart icon"
                />
                <div className="rounded-full flex justify-center items-center
                    bg-emerald-500 text-xs text-white absolute w-6 h-5 bottom-6 -right-1">
                  {cartCount} 
                </div>
            </button>
            <ShoppingCart />
            <br />
            <button className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white' onClick={() => signIn()}>
                Connexion
            </button>
            </>
            }
            {/* <Button className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white" onClick={() =>
                router.push('/cartProducts')}><ShoppingBasketIcon style={{ color: 'white' }} />
                 Achat d'un film </Button>
            <button className="relative" onClick={() => handleCartClick()}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8J-ZC-TWCe-pVn_0yS9EeTPXg0SxBMSHSmw&usqp=CAU" width={40}
                    height={40}
                    alt="shopping cart icon"
                />
                <div className="rounded-full flex justify-center items-center
                    bg-emerald-500 text-xs text-white absolute w-6 h-5 bottom-6 -right-1">
                  {cartCount} 
                </div>
            </button>
            <ShoppingCart />
            <br />
            <button className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white' onClick={() => signIn()}>
                Connexion
            </button> */}
        </nav>)
}