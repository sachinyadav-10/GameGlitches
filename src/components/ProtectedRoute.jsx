import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

function ProtectedRoute({ children }) {
  const { isSignedIn } = useUser();

  return isSignedIn ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
