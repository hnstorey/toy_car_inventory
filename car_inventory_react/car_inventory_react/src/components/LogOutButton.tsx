import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} 
    className="flex place-items-center mt-4 p-3 m-5 lg:inline-block lg-mt-0
    text-white hover:italic mr-4">
      Log Out
    </button>
  );
};

export default LogoutButton;