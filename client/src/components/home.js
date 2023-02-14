import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
     const navigate= useNavigate();
     React.useEffect(()=>{
          navigate('/exercises')
     },[])
  return (
    <div>home</div>
  )
}
