import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { HomePage, RegisterPage, LoginPage, TodoPage } from "../pages";
import { Layout } from "../components";

const router = (
  <Route element={<Layout />}>
    <Route path="/" element={<HomePage />} />
    <Route path="/signup" element={<RegisterPage />} />
    <Route path="/signin" element={<LoginPage />} />
    <Route path="/todo" element={<TodoPage />} />
  </Route>
);

const rootRouter = createBrowserRouter(createRoutesFromElements(router));

export default rootRouter;
