import React from 'react'
import { useSelector } from 'react-redux'

const UserName = () => {
  const userName = useSelector((state) => state.user.userName)
  return (
    <div>
     <h2>{userName}</h2>
    </div>
  )
}

export default UserName
