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
    className='rounded pl-2 w-[60%] my-2 h-6 bg-yellow-200 placeholder:text-stone-400  focus:ring-2 ring-yellow-200 sm:w-[20%] focus:w-72'
      placeholder='Search'
      value={query}
      onChange={(e)=>setQuery(e.target.value)}/>
   </form>
  )
}

export default SearchOrder
