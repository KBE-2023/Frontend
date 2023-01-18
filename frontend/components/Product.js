import Image from "next/image";

function Product({ id, name, price, description, image }) {
  return (
    <div className=" cursor-pointer  relative flex flex-col  m-5 bg-white p-5 rounded-2xl  shadow-2xl shadow-black">
      <Image src={image} width={200} height={200} objectFit="contain" />
      <h3 className=" font-extrabold py-1 line-clamp-1">{name}</h3>
      {/* <p className="py-2 pb-0 line-clamp-2">{description}</p> */}
      <p className="pb-2 text-center font-bold">${price}</p>
      <div className="flex justify-center">
        <button className=" flex items-center bg-green-300 px-4 rounded-lg h-10 w-fit hover:bg-green-500 hover:border-2">
          {" "}
          Add to Basket
        </button>
      </div>
    </div>
  );
}

export default Product;
