import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
async function fetchUsers() {
  const URL = "https://api.escuelajs.co/api/v1/users?limit=20";
  try {
    const response = await fetch(URL);
    console.log("respone : ")
    console.log(response)
    if (!response.ok) {

      throw new Error(`Error! status: ${response.status}`);

    }

    const result = await response.json();

    return result;

  } catch (err) {

    console.log(err);
  }

}
export default async function page() {
  const users = await fetchUsers();
  console.log(users)
  return (
    <div>page</div>
  )
}

// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'


// async function fetchUsers() {
//   const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1", {
//     cache: "no-store",
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       "Connection": "keep-alive"
//     }
//   })
//   return res.json()
// }

// export default async function Users() {
//   const users = await fetchUsers()
//   // const res = await fetchUsers()
//   return (
//     <main className="gap-x-4 px-3.5">
//       {/* {
//         <article className='flex flex-wrap items-center justify-between'>
//           {
//             users.map(
//               user => (
//                 <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                   <div className="flex justify-end px-4 pt-4">
//                     <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
//                       <span className="sr-only">Open dropdown</span>
//                       <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
//                     </button>

//                     <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
//                       <ul className="py-2" aria-labelledby="dropdownButton">
//                         <li>
//                           <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</Link>
//                         </li>
//                         <li>
//                           <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</Link>
//                         </li>
//                         <li>
//                           <Link href="/" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</Link>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                   <div className="flex flex-col items-center pb-10">
//                     <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={user.avatar} alt={user.name} />
//                     <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.name}</h5>
//                     <span className="text-sm text-gray-500 dark:text-gray-400">{user.role}</span>
//                     <div className="flex mt-4 space-x-3 md:mt-6">
//                       <Link href="/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</Link>
//                       <Link href="/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</Link>
//                     </div>
//                   </div>
//                 </div>
//               )
//             )
//           }
//         </article>
//       } */}

//     </main>
//   )
// }
