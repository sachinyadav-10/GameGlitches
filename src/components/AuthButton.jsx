import { UserButton, SignInButton, useUser } from "@clerk/clerk-react";
import { Button } from "react-bootstrap";

function AuthButton() {
  const { isSignedIn } = useUser();

  return (
    <div>
      {isSignedIn ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <SignInButton>
          <Button variant="primary">Sign In</Button>
        </SignInButton>
      )}
    </div>
  );
}

export default AuthButton;
