import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home/Index";
import Error from "./screens/Error/Index";
import Login from "./screens/login/Index";
import TaskDetails from "./screens/TaskDetails/Index";
import ProtectedRoutes from "./Helpers/ProtectedRoutes";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Error />} />
        <Route path="/" element={<ProtectedRoutes />}>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route
            path="/task/:id"
            element={
              <>
                <Navbar />
                <TaskDetails />
              </>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
