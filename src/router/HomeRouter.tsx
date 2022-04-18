import { Home } from "../components/pages/Home";
import { HikiyamaList } from "../components/pages/HikiyamaList";
import { UserManagement } from "../components/pages/UserManagement";


export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/user_management",
    exact: false,
    children: <UserManagement />
  },
  {
    path: "/hikiyama_list",
    exact: false,
    children: <HikiyamaList />
  }
];