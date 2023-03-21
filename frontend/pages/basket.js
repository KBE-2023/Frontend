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
                    { products.length>0 &&<div>
                     {
                        products.map(el => {
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
                            <div className='flex flex-col justify-between py-3 mx-5'> 
                              <buttom className =' flex flex-grow-0 m-2 p-1 bg-red-300 rounded-lg justify-center text-sm cursor-pointer hover:bg-red-400 hover:shaodw-lg '
                              onClick={() => {
                                  removeFromBasket(el)
                                }
                              }
                              > Remove from Basket</buttom>
                            </div>
                            </div>

                          )
                        })
                      } 
                      </div>}
                  </div>
                 
          </div>
           
           
            }
    </div>
    </div>
    <div className='flex justify-center space-x-5 flex-grow m-6 shadow-lg'> 
    <div className='flex'>Total</div>
    <div className='flex'>{basket?basket.totalPrice:"-"}</div>
    </div>
  </main>
    </div>
  )
}


 async function removeFromBasket(prod) {
  /*
  find relevant basket
  parse products string to list of ints
  subtract price of item from total price
  create a new string with all products except the removed from basket one
  create a new basket object with same customer Id but updated prodcuts and totalPrice
  PUT
  
  */
  let custId = 90
  let products = []
  const res = await  fetch("http://localhost:8091/baskets/")
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

    console.log(updatedBasket)


    const response = await fetch(`http://localhost:8090/baskets/${basket.customerId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: updatedBasket
  });
  }  
}  


/* const removeFromBasket = async(productId) => {
  let custId = 90;
  const res = await fetch("http://localhost:8091/baskets/");
  const baskets = await res.json();
  const basket = baskets.find(b => b.customerId === custId);
  
  if (basket) {
    const productIds = basket.products.split(",").map(id => parseInt(id));
    const index = productIds.indexOf(productId);
    if (index > -1) {
      productIds.splice(index, 1);
    }
    const response = await fetch(`http://localhost:8090/baskets/${custId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        products: productIds.join(",")
      })
    });
  }
} */




export async function getServerSideProps() {
  // Fetch data from external API
  let custId = 90
  let products = []
  const res = await  fetch("http://localhost:8091/baskets/")
  
  let basket = {}
  if(res.status !==404){
    const b = await res.json()
    let baskets = b
    let baskett= (b.filter(b => b.customerId === custId))
  

    if(baskett.length >0){
      basket = (baskett[0])
      //console.log(basket)
      let prodNrs = basket?.products.split(',').map(el => parseInt(el))
      const prodDetails = await fetch("http://localhost:8091/products/")
      const allProds = await prodDetails.json()
      products = allProds.filter(el => prodNrs.includes(el.id))
    }
  }




  //const c = await prodDetails.json()
  //products.push(c)
  //console.log(products)


  // Pass data to the page via props
  return { props: { basket, products } }
}