import React from "react";
import { Route, Switch } from "react-router";
import { Login, Home } from "./templates/index";

const Router = () => {
  return (
    <Switch>
      {/* exactが無いと部分一致になってしまう。
      Switchでラップした状態でexact pathとすることで、完全一致となる */}
      <Route exact path="/login" component={Login} />
      <Route exact path="(/)?" component={Home} />

      {/* パスにパラメータを含む場合はexactは使用しない事が多い */}
      {/* <Route path="/posts/:id" component={Post} /> */}
    </Switch>
  );
};

export default Router;
