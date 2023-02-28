import { Route, Routes } from "react-router-dom";
import Login from "../Login";
import Error from "../../Pages/Error";

const AuthenticatedRoute = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
        </Routes>

    )
};

export default AuthenticatedRoute;
