import { SignIn } from "@clerk/clerk-react";

const LoginPage = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <SignIn />
        </div>
    );
};

export default LoginPage;
