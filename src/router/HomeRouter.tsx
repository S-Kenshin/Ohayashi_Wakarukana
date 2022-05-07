import { Home } from "../components/pages/Home";
import { HikiyamaList } from "../components/pages/HikiyamaList";
import { Quiz } from "../components/pages/Quiz";


export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/hikiyama_list",
    exact: false,
    children: <HikiyamaList />
  },
  {
    path: "/quiz",
    exact: false,
    children: <Quiz />
  }
];