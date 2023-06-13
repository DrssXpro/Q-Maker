import { FC } from "react";
import { Outlet } from "react-router-dom";

const MainLayout: FC = () => {
  return (
    <>
      <div>Main Layout</div>
      <Outlet />
    </>
  );
};

export default MainLayout;
