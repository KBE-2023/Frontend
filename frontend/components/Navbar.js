import LoginButton from "./Login";
import LogoutButton from "./LogOut";
import { useAuth0 } from "@auth0/auth0-react";
import { useRouter } from "next/router";
import { FaShoppingBag } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";

function Navbar() {
  const { isAuthenticated } = useAuth0();
  const router = useRouter();
  return (
    <div className="flex flex-col sticky top-0 max-w-7xl font-medium p-6 px-5 sm:flex-row justify-between justify-center mx-auto text-base" style={{ backgroundColor: "#e0f2e9" }}>
      <div className="flex mx-2 px-1 cursor-pointer" onClick={() => router.push('/')}>
         <FaShoppingBag size={32} className="mr-2" />
        {/* <img src="/ebuy_logo.png" className="navbar-logo" style={{ maxHeight: '40px', maxWidth: '150px', objectFit: 'contain' }} /> */}
        <div>eBuy</div>
      </div>
      <div className="flex flex-col justify-center self-center sm:flex-row">
        <div className="mx-2 cursor-pointer px-1 text-center">MEN</div>
        <div className="mx-2 cursor-pointer px-1 text-center">WOMEN</div>
        <div className="mx-2 cursor-pointer px-1 text-center">ELECTRONICS</div>
        <div className="mx-2 cursor-pointer px-1 text-center">JEWELRY</div>
      </div>
      <div className="flex flex-col justify-center self-center mt-5 sm:mt-0 sm:flex-row">
      <FaShoppingBasket size={24} />
        <div 
          onClick={() => router.push('/basket')}
          className="flex mx-2 px-1 px-1 text-center"
        >
          <button > Basket </button>
        </div>
        <div className="mx-2 cursor-pointer">
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
