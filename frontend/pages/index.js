import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

export default function Home({ products }) {
  return (
    <div>
      <Navbar />
      <Main />
      <div className=" max-w-7xl mx-auto">
        {
          products?
          <Products products={products} />: <h2>The store is empty for now, please come back later</h2>
        }
      </div>
      <Footer />
    </div>
  );
}
/* export function getServerSideProps(context) {
  const dummyProds = [{"id":1,"product":233.3,"description":"a","image":"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg","name":"Mens Casual Slim Fit","price":15.99}]
  const products =  fetch("http://localhost:8087/product/get/1").then(
    (res) => {
          res.json().then(
            p => {
              dummyProds.push(p)
            }
          )
          
     }
  );

  return {
    props: {
      dummyProds,
    },
  };
} */

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await  fetch("http://localhost:8091/products/")
  console.log("aksdfhlkaskjdf")
  const p = await res.json()
 
  let products =p


  // Pass data to the page via props
  return { props: { products } }
}