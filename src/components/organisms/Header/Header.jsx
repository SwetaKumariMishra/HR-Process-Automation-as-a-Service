import PropTypes from "prop-types";
import { Button } from "@/components/atoms";
import reactSVG from "@/assets/react.svg";
import "./header.css";

const Header = ({ user, onLogin, onLogout, onCreateAccount }) => 
{
  
return(<nav className="bg-gray-800 shadow-lg">
  <div className="container mx-auto px-8">
    <div className="flex justify-between items-center py-8">
      <div className="flex items-center">
        <img src={reactSVG} alt="LOGO Image" className="w-8 h-8 mr-2" />
        <h1 className="text-white text-lg">Example</h1>
      </div>
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <span className="text-white">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button primary size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </div>
</nav>

);
}

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
export default Header;