import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import NotFound from "../pages/notFound";
import Edit from "../pages/edit";
import Stat from "../pages/stat";
import Manage from "../pages/manage";
import MyQuestionnaire from "../pages/manage/components/MyQuestionnaire";
import CollectQuestionnaire from "../pages/manage/components/CollectQuestionnaire";
import RecyleQuestionnaire from "../pages/manage/components/RecyleQuestionnaire";

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
        element: <Manage />,
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
  {
    path: "stat/:id",
    element: <Stat />,
  },
];

const router = createBrowserRouter(routes);

export default router;
