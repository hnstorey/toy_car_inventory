import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()} className="flex place-items-center mt-4 p-3 m-5 lg:inline-block lg-mt-0
  text-white hover:italic mr-4">Log In</button>;
};

export default LoginButton;