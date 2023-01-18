import LoginButton from "./Login";
import LogoutButton from "./LogOut";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className=" flex flex-col bg-white sticky top-0 max-w-7xl font-medium p-6 px-5 sm:flex-row justify-between justify-center mx-auto text-base ">
      <div className="flex flex-col justify-center self-center sm:flex-row">
        <div className="mx-2 cursor-pointer px-1 text-center">MEN</div>
        <div className="mx-2 cursor-pointer px-1 text-center">WOMEN</div>
        <div className="mx-2 cursor-pointer px-1 text-center">ELECTRONICS</div>
        <div className="mx-2 cursor-pointer px-1 text-center">JEWELERY</div>
      </div>
      <div className="flex flex-col  justify-center self-center mt-5 sm:mt-0 sm:flex-row">
        <div className="mx-2 cursor-pointer">
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
