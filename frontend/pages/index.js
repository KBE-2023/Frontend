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
        <Products products={products} />
      </div>
      <Footer />
    </div>
  );
}
export async function getServerSideProps(context) {
  const products = await fetch("http://localhost:8080/kbe/getdata").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
