import Image from "next/image";

function Product({ id, product, description, image, name, price }) {

  async function addToBasket() {
    let custId = 90
    const basket = await fetch(`http://localhost:8090/baskets/${custId}`)

    if(basket.status === 404){ // if there is no basket
      console.log("fetchhh123")
      const response = await fetch("http://localhost:8090/baskets/", {
        method: "POST",
        body: JSON.stringify({
          "customerId": custId,
          "totalPrice": price,
          "products": ""+id
        }),
        headers:{
          "Content-Type": "application/json"
        }
      })
   
      const data = await(response.json())
    }else{
      console.log("fetchhh")
      const b = await basket.json()
      let prods = b.products
      const response =  await fetch(`http://localhost:8090/baskets/${custId}`, {
        method: "PUT",
        body: JSON.stringify({
          "customerId": custId,
          "products": prods+","+id,
          "totalPrice": b.totalPrice + price,
        }),
        headers:{
          "Content-Type": "application/json"
        }
      })
      console.log(response)
      //const data = await(response.json())
    }


  }

  return (
    <div className=" cursor-pointer  relative flex flex-col  m-5 bg-white p-5 rounded-2xl  shadow-2xl shadow-black">
      <Image src={image} width={200} height={200} objectFit="contain" />
      <h3 className=" font-extrabold py-1 line-clamp-1">{name}</h3>
      {/* <p className="py-2 pb-0 line-clamp-2">{description}</p> */}
      <p className="pb-2 text-center font-bold">${price}</p>
      <div className="flex justify-center">
        <button className=" flex items-center bg-green-300 px-4 rounded-lg h-10 w-fit hover:bg-green-500 hover:border-2" onClick={() => {
          addToBasket( id, product, description, image, name, price)
        }}>

          Add to Basket
        </button>
      </div>
    </div>
  );
}



export default Product;
