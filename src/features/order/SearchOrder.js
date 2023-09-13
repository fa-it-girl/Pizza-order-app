import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchOrder = () => {
  const [query, setQuery]=useState('')
  const navigate = useNavigate()


  const submitFormHandler = (e) => {
    e.preventDefault();
    if (!query) return
    navigate(`/order/${query}`)
    setQuery('')
  }
  return (
   <form onSubmit={submitFormHandler}>
    <input
      placeholder='Search'
      value={query}
      onChange={(e)=>setQuery(e.target.value)}/>
   </form>
  )
}

export default SearchOrder