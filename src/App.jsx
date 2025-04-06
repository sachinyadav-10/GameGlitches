import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import { useAuth } from "@clerk/clerk-react";
import Header from "./components/Header";
import SideBar from "./components/SideBar"; 
import Home from "./pages/Home";
import GameDetail from "./pages/GameDetails";
import Library from "./pages/Library";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer";

const clerkPubKey = import.meta.env.VITE_CLERK_KEY;

function ProtectedRoute({ children }) {
    const { isSignedIn } = useAuth();
    return isSignedIn ? children : <Navigate to="/sign-in" replace />;
}

function App() {
    return (
        <ClerkProvider publishableKey={clerkPubKey}>
            <Router>
                <SignedIn>
                    <Header />
                    <div className="d-flex">
                        <SideBar /> 
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/game/:id" element={<GameDetail />} />
                            <Route path="/library" element={<Library />} />
                            <Route path="*" element={<Navigate to="/" replace />} />
                            
                        </Routes>
                    </div>
                    <Footer/>
                </SignedIn>

                <SignedOut>
                    <Routes>
                        <Route path="/sign-in" element={<LoginPage />} />
                        <Route path="/sign-up" element={<LoginPage />} />
                        <Route path="*" element={<Navigate to="/sign-in" replace />} />
                    </Routes>
                </SignedOut>
            </Router>
        </ClerkProvider>
    );
}

export default App;
