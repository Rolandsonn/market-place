import { authRoutes, publicRoutes } from "./routes.jsx";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AppRouter() {
  const { isAuth } = useSelector((state) => state.auth);

  return (
    <div>
      <Routes>
        {isAuth &&
          authRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        {publicRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </div>
  );
}
