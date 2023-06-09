import React from 'react'
import { BASE_URL } from '../utils/constant'
import UserCard from '@/components/UserCard'

export const metadata = {
  title: 'Samboleap - User',
  description: 'Listing All Users',
}

async function fetchUsers() {
  const res = await fetch(`${BASE_URL}users?limit=8`, {cache: "no-store"})
  return res.json()
}

export default async function Users() {
  const users = await fetchUsers()
  return (
    <main className="gap-x-4 px-16 mt-24">
      <h1>All Users</h1>
      {
        <article className='flex flex-wrap items-center justify-between'>
          {
            users.map(
              (user) => (
                <div className='my-4 w-96 min-h-full'>
                <UserCard
                key={user.id}
                avatar={user.avatar}
                name={user.name}
                role={user.role}
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