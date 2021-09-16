import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import createStore from "./reducks/store/store";
import * as History from "history";
import { ConnectedRouter } from "connected-react-router";

const history = History.createBrowserHistory();
// createStoreを実行することで初めてstoreが作成される
export const store = createStore(history);

ReactDOM.render(
  //  Providerにstoreを渡すことで、ラップしたコンポーネントにstoreの情報を渡すことができる
  //  また、ラップしたコンポーネント内で、react-reduxのconnect関数(reactとreduxを接続して、storeを変更できるようにするもの)を使えるようにする
  <Provider store={store}>
    {/* ConnectedRouterでラップすることで、URL遷移の履歴が保存されたり参照可能になったりする */}
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
