import "./NavBar.css";
import { MdMenu } from "react-icons/md";
import CartWidget from "../../components/CartWidget/CartWidget";

const NavBar = () => {
  return (
    <header className="navbar-container">
      <div>
        <MdMenu />
        <span>Menu</span>
      </div>
      <img src="" alt="logo" />
      <CartWidget />
    </header>
  );
};
export default NavBar;
