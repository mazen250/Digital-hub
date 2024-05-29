import { Navigate, Outlet } from "react-router-dom";
import userStore from "../stores/userStores";
import User from "../types/User";
const ProtectedRoutes = () => {
  const { user } = userStore() as { user: User | null };

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
