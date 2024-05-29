import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'

const Users = () => {
    const [users,setUsers] = useState([]);
    const getusers = async ()=> {
        try {
            const {data}  = await axios.get("https://ej-backend.onrender.com/api/v1/user/admin/users")
            setUsers(data?.users)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getusers()
    },[]);

  return (
    <>
        <Header/>
        {users.map((user)=>(
            <div className="flex justify-center items-center p-5 bg-gray-100">
            <div className="bg-white p-5 rounded-lg shadow-md w-full max-w-sm">
                <div className="user">
                    <ul>
                        <li>
                            <h1 className="text-2xl font-bold">{user.firstName} {user.lastName}</h1>
                        </li>
                        <li>
                            <p className="text-lg text-gray-600 mt-2">{user.email}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        
        ))}
        <Footer/>
    </>
  )
}

export default Users;