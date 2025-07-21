import { constants } from "@components/constant";
import { About, Collection, Contact, Home, Product } from "@page/index";

export const routerConfigWeb = [
  { path: constants.home, component: Home },
  { path: constants.collection, component: Collection },
  { path: constants.about, component: About },
  { path: constants.contact, component: Contact },
  { path: "/product/:productId", component: Product },
];
