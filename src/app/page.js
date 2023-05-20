import Image from 'next/image'
import Products from './products/page'
import Users from './users/page'
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
export default async function Home() {
  const user=await fetchUsers();
  return (
    <>
    {/* <Products/> */}
    {/* <Users/> */}
    </>
  )
}
