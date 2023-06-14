import React from "react";
import { useEffect } from 'react';

const Confirmation = () => {

    useEffect( () => {
        sessionStorage.clear();
    }, []);
    
    return (
        <>
            <section class="bg-white mb-">
                <div class="py-8 px-4 mx-auto max-w-screen-xl h-screen text-center lg:py-16 lg:px-12">
                
                    <h1 class="mt-10 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Order Successful!</h1>
                    <p class="text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 mb-10">Thank you for supporting our small business! You will receive an email confirmation shortly.</p>
                
                    <div class="flex flex-col items-center justify-center mx-auto rounded-lg lg:px-10 max-w-4xl">
                        <img class="object-cover object-center w-full rounded-xl" alt="hero" src="https://images.unsplash.com/photo-1534278931827-8a259344abe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"/>
                </div>
            </div>


        </section>

        </>
    )
}

export default Confirmation;