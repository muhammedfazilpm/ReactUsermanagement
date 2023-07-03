import React, { useEffect } from 'react';
import axios from 'axios'
import Layout from '../components/Layout';
 function Home() {

  const getData=async(  )=>{
    try {
      const response=await axios.post("/api/user/get-user-info-by-id" ,{} , 
      {
      headers : {
        Authorization : "Bearer "+localStorage.getItem("token")
      }})
      console.log(response.data)
   } catch (error) {
    console.log(error)
       
    }

  }

  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
<Layout>
<h1>home</h1>
</Layout>

    </div>
  )
}

export default Home