import { InferGetStaticPropsType } from "next"

interface User{
  id: number,
  name: string,
  email: string
}
function UserList({users}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
    <div>User List</div>
    {users.map((user: User)=>{
      return(
      <div key={user.id}>
      <p>{user.name}</p>
      <p>{user.email}</p>
      </div>
      )
    })}
    
    </>
  )
}

export default UserList


export async function getStaticProps(){
const response  = await fetch('https://jsonplaceholder.typicode.com/users')
const data = await response.json()
console.log(data)
return{
  props:{
    users:data,
  }
}
}