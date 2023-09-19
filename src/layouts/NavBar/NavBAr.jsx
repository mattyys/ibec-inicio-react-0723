import './NavBar.css'
import { MdMenu} from "react-icons/md";
const NAvBAr = () => {
  return (
    <header className="navbar-container">
      <div>
        <MdMenu />
        <span>Menu</span>
      </div>
      <img src="" alt="logo" />
      <div>
        0
      </div>
    </header>
  );
};
export default NavBar;
