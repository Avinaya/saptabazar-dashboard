import React from "react";
import MiniDrawer from "./component/drawer/Drawer";
import { Switch, Route } from "react-router-dom";
import Products from "./pages/Products/Products";
import Dashboard from "./component/dashboard/Dashboard";
import Order from './pages/Orders/Order';

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <MiniDrawer component={Dashboard} />
      </Route>
      <Route exact path="/products">
        <MiniDrawer component={Products} />
      </Route>
      <Route exact path="/orders">
      <MiniDrawer component={Order} />
    </Route>
    </Switch>
  );
};
export default App;
