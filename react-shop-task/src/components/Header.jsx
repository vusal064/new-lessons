import "./header.css";
import { FiShoppingCart } from "react-icons/fi";
function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-left">
            
          <div className="icon-wrapper">
            <FiShoppingCart className="icon" />
          </div>

          <div className="header-titles">
            <p className="header-title">Məhsul Mağazası</p>
            <p className="header-text">React State Management Dərsi</p>
          </div>

        </div>
      </div>
      <div className="header-line"></div>
    </div>
  );
}
export default Header;
