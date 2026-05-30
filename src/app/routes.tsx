import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { Restaurant } from "./components/Restaurant";
import { Cart } from "./components/Cart";
import { OrderTracking } from "./components/OrderTracking";
import { Profile } from "./components/Profile";
import { Search } from "./components/Search";
import { OrderHistory } from "./components/OrderHistory";
import { Favourites } from "./components/Favourites";
import { Addresses } from "./components/Addresses";
import { PaymentMethods } from "./components/PaymentMethods";
import { Settings } from "./components/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Login },
      { path: "home", Component: Home },
      { path: "restaurant/:id", Component: Restaurant },
      { path: "cart", Component: Cart },
      { path: "tracking/:orderId", Component: OrderTracking },
      { path: "profile", Component: Profile },
      { path: "search", Component: Search },
      { path: "orders", Component: OrderHistory },
      { path: "favourites", Component: Favourites },
      { path: "addresses", Component: Addresses },
      { path: "payments", Component: PaymentMethods },
      { path: "settings", Component: Settings },
    ],
  },
]);
