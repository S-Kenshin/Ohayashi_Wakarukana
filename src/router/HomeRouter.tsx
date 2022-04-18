import { Home } from "../components/pages/Home";
import { HikiyamaList } from "../components/pages/HikiyamaList";


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
  }
];