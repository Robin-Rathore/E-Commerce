import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'

const Users = () => {
    const [users,setUsers] = useState()
    const getusers= async()=>{
        try {
            const {data}  = await axios.get("http://localhost:8080/api/v1/user/admin/users")
            setUsers(data?.users)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getusers()
    },[])
  return (
    <>
        <Header/>
        {users.map((user)=>(
            <h1>{user.email}</h1>
        ))}
        <Footer/>
    </>
  )
}

export default Users