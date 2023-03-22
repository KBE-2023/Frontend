import React from 'react'
import Navbar from '../components/Navbar'

export default function Basket({ basket, products }) {
  const handleRemoveFromBasket = async (el) => {
    await removeFromBasket(el);
    window.location.reload();
  };


  return (
    <div className='bg-gray-100'>
    <Navbar></Navbar>
    <main className=" flex flex-col max-w-7xl mx-auto sm:flex-row ">
      <div className='flex-grow m-6 shadow-lg'>
        <div className=' flex shadow-lg py-1 my-5' style={{ fontWeight: 'bold' }}> Your Basket </div>
        <div className=' flex flex-col px-1 space-y-10'>
          {products.length > 0 ? (
            <div className='sm:flex justify-between mx-5 space-x-10'  >
              <div className='flex flex-grow flex-col'>
                {products.map(el => {
                  return (
                    <div style={{ marginBottom: '20px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <img src={el.image} alt={el.name} style={{ width: '200px', height: 'auto', marginRight: '20px' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                          <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
                            {el.name}
                          </div>
                          <div style={{ fontWeight: 'bold', marginBottom: '5px' }}> 
                            €{el.price}
                          </div>
                        </div>
                        <div className='flex flex-col justify-between py-3'> 
                          <button className ='flex flex-grow-0 m-2 p-1 bg-red-300 rounded-lg justify-center text-sm cursor-pointer hover:bg-red-400 hover:shadow-lg'
                            onClick={() => handleRemoveFromBasket(el)}
                          > Remove from Basket</button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div> 
            </div>
          ) : (
            <div style={{ textAlign: 'center', margin: '50px' }}>
              <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Your basket is empty!</p>
              {/* <img src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" alt="empty basket" style={{ width: '200px', height: 'auto' }} /> */}
            </div>
          )}
        </div>
      </div>
      {products.length > 0 &&
        <div className='flex flex-col justify-center items-center flex-grow m-6 shadow-lg'> 
          <div className='flex mb-2'>Total</div>
          <div style={{ fontWeight: 'bold' }} className='flex mb-4'>{basket ? `€${basket.totalPrice.toFixed(2)}` : "-"}</div>
          <div className='flex flex-col items-center justify-center'>
            <button className ='flex-shrink-0 px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'>
              Proceed to Checkout
            </button>
          </div>
        </div>
      }
    </main>
  </div>
  
  )
}


 async function removeFromBasket(prod) {
 
  let custId = 90
  let products = []
  const res = await  fetch("http://localhost:8090/baskets/")
  console.log("res")
  console.log(res)
  const b = await res.json()
  let basket = {}
  
  let baskets = b

  let baskett= (b.filter(b => b.customerId === custId))
  
  if(baskett.length >0){
    basket = (baskett[0])
    //console.log(basket)
    let prodNrs = basket?.products.split(',').map(el => parseInt(el))
    // [1, 2, 3] el.id 
    products = prodNrs.filter(el => el !== prod.id)
    let prodStr = ""
    for(let i=0; i<products.length; i++){
      if(i===0){
        prodStr = prodStr + products[i]
      }else{
        prodStr = prodStr+"," + products[i]
      }
      
    }

    let updatedBasket = JSON.stringify({
      "customerId" : basket.customerId,
      "totalPrice": basket.totalPrice - prod.price,
      "products": prodStr
    })

    console.log("customer id")
    console.log(basket.customerId)


    const response = await fetch(`http://localhost:8090/baskets/${basket.customerId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: updatedBasket
  });
  }  
}  

export async function getServerSideProps() {
  // Fetch data from external API
  let custId = 90
  let products = []
  const res = await  fetch("http://localhost:8090/baskets/")
  
  let basket = {}
  if(res.status !==404){
    const b = await res.json()
    let baskets = b
    let baskett= (b.filter(b => b.customerId === custId))
  

    if(baskett.length >0){
      basket = (baskett[0])
      //console.log(basket)
      let prodNrs = basket?.products.split(',').map(el => parseInt(el))
      const prodDetails = await fetch("http://localhost:8087/products/")
      const allProds = await prodDetails.json()
      products = allProds.filter(el => prodNrs.includes(el.id))
    }
  }

  // Pass data to the page via props
  return { props: { basket, products } }
}