import MainPage from "../pages/MainPage";
import PersonalPage from "../pages/PersonalPage";
import { links } from "./links";

export const authRoutes = [
  {
    path: links.per,
    element: <PersonalPage />,
  },
];

export const publicRoutes = [
  {
    path: links.mainPage,
    element: <MainPage />,
  },
];
