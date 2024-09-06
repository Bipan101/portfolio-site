import React, { useEffect , useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
const data = useLoaderData()

//This is also valid but you can use useLoaderData hook to do that in much shorter way.
// const[data, setData] = useState([])
//     useEffect(()=>{
//         fetch('https://api.github.com/users/bipan101')
//         .then(response => response.json())
//         .then(data=> {
//             console.log(data);
//             setData(data)
//         })
//     },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      GitHub Followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} className='rounded-full'/>
    </div>
  )
}

export default Github


export const githubInfoLoader = async()=>{
   const response = await fetch('https://api.github.com/users/bipan101')
    return response.json();
}