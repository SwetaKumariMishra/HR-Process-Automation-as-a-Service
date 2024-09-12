import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "@/components/organisms";

const 
BaseLayout = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleCreateAccount = () => {
    navigate("/signup");
  };
  const handleLogOut = () => {
    navigate("/")
  }

  return (
    <>
      <Header onLogin={handleLogin} onLogout={handleLogOut} onCreateAccount={handleCreateAccount} />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default BaseLayout;
