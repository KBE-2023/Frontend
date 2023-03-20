import Product from "./Product";

function Products({ products }) {
  return (
    <div className=" -mt-25 grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
      {products.map(({ id, description, image, name, price }) => (
        <Product
          key={id}
          id={id}
          name={name}
          price={price}
          description={description}
          image={image}
        />
      ))}
    </div>
  );
}

export default Products;
