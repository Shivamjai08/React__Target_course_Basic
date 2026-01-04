import React, { useEffect, useState} from 'react'

function Github() {
    const[data,setData]= useState([])
    useEffect(() => {fetch('https://api.github.com/users/Shivamjai08') 
        .then((response) => response.json())
        .then(data =>{
            console.log(data);
            setData(data)
        })
     },[])

  return (
    <div className='text-center m-4 bg-gray-700 text-white text-3xl p-4'> 
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="github profile" className='m-4 rounded-full mx-auto' width="200px" height="200px"/>
    </div>
  )
}

export default Github
