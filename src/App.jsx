import Counter from './Counter'
import './App.css'
import Batsman from './Batsman'
import Users from './Users'
import { Suspense } from 'react'
import Friends from './Friends'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

const fetchFriends = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json();
}
function App() {
  const friendsPromise = fetchFriends();
  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
        <Friends friendsPromise = {friendsPromise}></Friends>
      </Suspense>
      <Batsman></Batsman>
      <h2>heello react</h2>
      <Counter></Counter>
    </>
  )
}

export default App
