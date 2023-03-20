import React from 'react'
import Navbar from '../components/Navbar'

export default function Basket({ basket, products }) {
  return (
    <div className='bg-gray-100'>
    <Navbar></Navbar>
    <main className=" flex flex-col max-w-7xl mx-auto sm:flex-row ">
    <div className='flex-grow m-6 shadow-lg'>
    <div className=' flex shadow-lg py-1 my-5'> Your Basket </div>
    <div className=' flex flex-col px-1 space-y-10'>
    
            
            {
               
                  <div className='sm:flex justify-between mx-5 space-x-10'  >
                  <div className='flex flex-grow flex-col'>
                    { products &&<div>
                     {
                        products.map(el => {
                          <buttom className =' flex flex-grow-0 m-2 p-1 bg-red-300 rounded-lg justify-center text-sm cursor-pointer hover:bg-red-400 hover:shaodw-lg '> Remove from Basket</buttom>
                          return(
                            <div>
                            <div>
                              {el.name}
                            </div>
                            <div>
                              {el.description}
                            </div>
                            <div>
                              {el.price}
                            </div>
                            <div>
                              {el.image}
                            </div>
                            </div>

                          )
                        })
                      } 
                      </div>}
                  </div>
                  <div className='flex flex-col justify-between py-3 mx-5'> 
            
             </div>
          </div>
           
           
            }
    </div>
    </div>
    <div className='flex justify-center space-x-5 flex-grow m-6 shadow-lg'> 
    <div className='flex'>Total</div>
    <div className='flex'>{basket.totalPrice}</div>
    </div>
  </main>
    </div>
  )
}


export async function getServerSideProps() {
  // Fetch data from external API
  let custId = 90
  let products = []
  const res = await  fetch("http://localhost:8091/baskets/")
  console.log("aksdfhlkaskjdf")
  const b = await res.json()
  let basket = {}
  
  let baskets = b

  let baskett= (b.filter(b => b.customerId === custId))
  

  if(baskett.length >0){
    basket = (baskett[0])
    console.log(basket)
    let prodNrs = basket?.products.split(',').map(el => parseInt(el))
    const prodDetails = await fetch("http://localhost:8091/products/")
    const allProds = await prodDetails.json()
    products = allProds.filter(el => prodNrs.includes(el.id))
  }

  //const c = await prodDetails.json()
  //products.push(c)
  //console.log(products)


  // Pass data to the page via props
  return { props: { basket, products } }
}