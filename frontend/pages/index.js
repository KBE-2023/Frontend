import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

export default function Home({ products }) {
  return (
    <div>
      <Navbar />
      <br />
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

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await  fetch("http://localhost:8091/products/")
  const p = await res.json()
 
  let products =p


  // Pass data to the page via props
  return { props: { products } }
}