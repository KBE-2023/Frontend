import React from 'react'
import Navbar from '../components/Navbar'

function Basket() {
  return (
    <div className='bg-gray-100'>
    <Navbar></Navbar>
    <main className=" flex flex-col max-w-7xl mx-auto sm:flex-row ">
    <div className='flex-grow m-6 shadow-lg'>
    <div className=' flex shadow-lg py-1 my-5'> Your Basket </div>
    <div className=' flex flex-col px-1 space-y-10'>
        <div className='sm:flex justify-between mx-5 space-x-10'  >
            <div className='flex justify-center' mx-10 p-2> Image</div>
            <div className='flex flex-grow flex-col'>
                <div> Title </div>
                <div> Here will  be the description of the product. </div>
                <div>Price</div>
                 </div>
            <div className='flex flex-col justify-between py-3 mx-5'> 
            <buttom className =' flex m-2 p-1 bg-green-400 rounded-lg justify-center text-sm cursor-pointer hover:bg-green-600 hover:shaodw-lg'>Add to Basket</buttom>
            <buttom className =' flex flex-grow-0 m-2 p-1 bg-red-300 rounded-lg justify-center text-sm cursor-pointer hover:bg-red-400 hover:shaodw-lg '> Remove from Basket</buttom>
             </div>
        </div>
        <div>Item test 2</div>
        <div>Iten test 3</div>
    </div>
    </div>
    <div className='flex justify-center space-x-5 flex-grow m-6 shadow-lg'> 
    <div className='flex'>Total</div>
    <div className='flex'> Price here</div>
    </div>
  </main>
    </div>
  )
}

export default Basket