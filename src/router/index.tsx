import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import ManageLayout from "../layout/ManageLayout/ManageLayout";
import MyQuestionnaire from "../layout/ManageLayout/components/MyQuestionnaire";
import CollectQuestionnaire from "../layout/ManageLayout/components/CollectQuestionnaire";
import RecyleQuestionnaire from "../layout/ManageLayout/components/RecyleQuestionnaire";
import NotFound from "../pages/notFound";
import Edit from "../pages/edit";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to={"/home"} />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "manage",
        element: <ManageLayout />,
        children: [
          {
            path: "",
            element: <Navigate to={"/manage/my"} />,
          },
          {
            path: "my",
            element: <MyQuestionnaire />,
          },
          {
            path: "collect",
            element: <CollectQuestionnaire />,
          },
          {
            path: "recyle",
            element: <RecyleQuestionnaire />,
          },
        ],
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "edit/:id",
    element: <Edit />,
  },
];

const router = createBrowserRouter(routes);

export default router;
