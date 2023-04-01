import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext/AuthProvider";
import useAdmin from "../Components/MyHooks/useAdmin";
import Spinner from "../Shared/Spinner/Spinner";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, adminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || adminLoading) {
        return <Spinner />;
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to='/logIn' state={{ from: location }} replace />
};

export default AdminRoute;