import React from 'react'
import Header from './Header'
import CartOverview from '../features/cart/CartOverview'
import { Outlet, useNavigation } from 'react-router-dom'
import Loader from './Loader'

const AppLayout = () => {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'
  return (
    <div className='grid grid-rows-[auto_1fr_auto] h-screen'>
     <Header />
     {isLoading && <Loader />}
     <main className='overflow-scroll'>
      <Outlet />
     </main>

     <CartOverview />
    </div>
  )
}

export default AppLayout
