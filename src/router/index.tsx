import { constants } from "@components/constant";
import MainLayout from "@layout/web/MainLayout";
import { About, Collection, Contact, Home, Product } from "@page/index";
import { RootRoute, Route, createRouter } from "@tanstack/react-router";

const routerConfigWeb = [
  { path: constants.home, component: Home },
  { path: constants.collection, component: Collection },
  { path: constants.about, component: About },
  { path: constants.contact, component: Contact },
  { path: `${constants.product}/$id`, component: Product },
];
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
const routeTree = rootRouter.addChildren(childRouteres);
export const router = createRouter({ routeTree });
