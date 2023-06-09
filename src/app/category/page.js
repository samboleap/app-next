import Link from 'next/link';
import React from 'react'
import { BASE_URL } from '../utils/constant';
import CategoryCard from '@/components/CategoryCard';

export const metadata = {
  title: 'Samboleap - Category',
  description: 'Listing All Categories',
}

async function fetchCategories() {
  const items = await fetch(`${BASE_URL}categories?limit=12`, { cache: "no-store" })
  return items.json()
}


export default async function Categories() {
  const cates = await fetchCategories()
  return (

    <main className="gap-x-4 px-16 mt-24">
      <h1>All Categories</h1>
      {
        <article className='flex flex-wrap items-center justify-between'>
          {
            cates.map(
              cate => (
                <div className='my-4 w-96 min-h-full'>
                <CategoryCard
                key={cate.id}
                image={cate.image}
                name={cate.name}
                />
                </div>
              )
            )
          }
        </article>
      }
    </main>
  )
}