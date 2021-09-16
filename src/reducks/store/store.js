// storeがどのようなロジックで成り立っているかよくわからなくなったら以下の動画を見る
// https://www.youtube.com/watch?v=t_-Tpc913B4&list=PLX8Rsrpnn3IWavNOj3n4Vypzwb3q1RXhr&index=6&ab_channel=%E3%80%90%E3%81%A8%E3%82%89%E3%82%BC%E3%83%9F%E3%80%91%E3%83%88%E3%83%A9%E3%83%8F%E3%83%83%E3%82%AF%E3%81%AE%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2%E5%AD%A6%E7%BF%92%E8%AC%9B%E5%BA%A7
import { createStore as reduxCreateStore, combineReducers, applyMiddleware } from "redux";
import { UsersReducer } from "../users/reducers";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
// storeの作成
const createStore = (history) => {
  return reduxCreateStore(
    // 便宜上分割しているReducersを合体させる
    combineReducers({
      // ヒストリー(過去, 現在のパス)をReduxでstateとして管理できるようにするために、
      // キーをrouterにして設定
      router: connectRouter(history),
      users: UsersReducer,
      // products: ProductsReducer
    }),
    // routerMiddlewareをミドルウェアとして使うことを宣言
    applyMiddleware(routerMiddleware(history), thunk)
  );
};

export default createStore;
