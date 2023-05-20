import Link from 'next/link'
import React from 'react'
import { usePathname } from "next/navigation";

async function fetchProducts(id){
  const resp = await fetch(`https://fakestoreapi.com/products/${id}`,{cache: "no-store"})
  return resp.json()
}

export async function generateMetadata({params}){
  const product = await fetchProducts(params.id)
  return{ 
  title: product.title,
  description: product.description,
  thumbnail: product.image,
  metadataBase: new URL('https://istad.co'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    image: product.images,
    title: product.title,
    description: product.description
  },
  }
}

export default async function ProductDetail({params}) {
  
    const{id} = params
    const product = await fetchProducts(id)
    // const pathname = usePathname();
  return (


<main className="flex min-h-max flex-col items-center justify-between p-24 bg-emerald-100"
style={{height:"690px"}}
>
  {/* <div className="mt-auto">
        <Link
          href="#"
          class="flex flex-col items-center bg-white hover:animate-background bg-gradient-to-r from-green-300 via-blue-400 to-purple-500 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] rounded-xl  md:flex-row md:max-w-sm"
        >
          <img
            class="object-cover w-9/12 rounded-t-lg h-100 md:h-auto md:w-72 md:rounded-none md:rounded-l-lg"
            src={product.image}
            alt=""
            style={{width:"40"}}
          />
          <div class="flex flex-col justify-between p-6 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {product.title}
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {product.description}
            </p>
          </div>
        </Link>
        </div> */}


<Link href="/" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
style={{height: "600px" , width: "950px"}}
>
    <img class="object-cover w-9/12 rounded-t-lg h-100 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={product.image} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-norbgmal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {product.title}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {product.description}
        </p>
        {/* <Link href="/about"
                className={
                  pathname === "/about"
                    ? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                } class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        style={{float: "right", width: "140px"}}>
          Start to Pay
        </Link> */}
        
    </div>
</Link>
      </main>

  )
}