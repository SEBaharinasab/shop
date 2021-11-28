import { lazy } from "react";

const Main = lazy(() => import("../Layouts/Main.layout"));
const Dashboard = lazy(() => import("../Layouts/Dashboard.layout"));
const Practice = lazy(() => import("../Layouts/Practice.layout"));

const routes = [
  { path: "/dashboard/", exact: false, Component: Dashboard, title: "Dashboard", isPrivate: true },
  { path: "/practice/", exact: false, Component: Practice, title: "Dashboard", isPrivate: true },
  { path: "/", exact: false, Component: Main, title: "Main", isPrivate: false },
];

export default routes;