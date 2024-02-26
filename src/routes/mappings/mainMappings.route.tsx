import { RouteObject } from "react-router-dom";
import { mainPaths } from "../paths/mainPaths";
import Home from "../../pages/Home/Home";

export const mainMappings: RouteObject[] = [
  {
    path: mainPaths.Home,
    element: <Home />,
  },
];
