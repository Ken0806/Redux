import { signInAction } from "./actions";
import { push } from "connected-react-router";

export const signIn = () => {
  return async (dispatch, getState) => {
    // 上記2行はお決まりの文
    const state = getState();
    const isSignedIn = state.users.isSignedIn;

    if (!isSignedIn) {
      const url = "https://api.github.com/users/deatiger";
      // fetchは非同期処理として実行するメソッド(Promiseを返す)。
      // それにawaitをつけることで、fetchの処理を待つことができる。
      const response = await fetch(url)
        .then((res) => res.json())
        .catch(() => null);
      const username = response.login;
      dispatch(
        signInAction({
          isSignedIn: true,
          uid: "000012",
          username: username,
        })
      );
      dispatch(push("/"));
    }
  };
};
