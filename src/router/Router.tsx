import {
  RootRoute,
  Route,
  RouterProvider,
  createRouter,
} from "@tanstack/react-router";
import Home from "../page/Home";
import MainLayout from "@layout/web/MainLayout";

const rootRouter = new RootRoute({
  component: () => <MainLayout />,
});
const routerConfig = [{ path: "/", component: Home }];
const childRouteres = routerConfig.map(
  ({ path, component }) =>
    new Route({
      getParentRoute: () => rootRouter,
      path,
      component,
    })
);
const routeTree = rootRouter.addChildren(childRouteres);
export const router = createRouter({ routeTree });
export function AppRouterProvider() {
  return <RouterProvider router={router} />;
}
