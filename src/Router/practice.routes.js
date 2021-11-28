import { lazy } from "react";

const Page1 = lazy(() => import('../Pages/Practice/PageOne'));
const Page2 = lazy(() => import('../Pages/Practice/PageTwo'));

const routes = [
   { path: "one/", exact: false, Component: Page1, title: "Page One", isPrivate: false },
   { path: "two/", exact: false, Component: Page2, title: "Page Two", isPrivate: false },
];

export default routes;