import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isOnboardingComplete =
    localStorage.getItem("onboardingComplete") === "true";

  return isOnboardingComplete ? children : <Navigate to="/" replace />;
}