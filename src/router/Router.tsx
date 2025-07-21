import {
  RootRoute,
  Route,
  RouterProvider,
  createRouter,
} from "@tanstack/react-router";
import MainLayout from "@layout/web/MainLayout";
import { routerConfigWeb } from "./listRouter";

const rootRouter = new RootRoute({
  component: () => <MainLayout />,
});
const childRouteres = routerConfigWeb.map(
  ({ path, component }) =>
    new Route({
      getParentRoute: () => rootRouter,
      path,
      component,
    })
);
console.log(childRouteres);

const routeTree = rootRouter.addChildren(childRouteres);
const router = createRouter({ routeTree });
export function AppRouterProvider() {
  return <RouterProvider router={router} />;
}
