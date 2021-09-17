// actionsファイル内のモジュールをすべてimport(Actionsという名前をつける)
import * as Actions from "./actions";
// inintial stateをimport
import initialState from "../store/initialState";
// actionの種類(type)だけ、reducerの種類がある

// 第一引数のstateは、現在のstateの値 or stateの初期値
// 第二引数のactionは、userのactionの返り値
export const UsersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        // 変更前の現在のstateを忘れずに。
        // これを忘れると、action.payloadに存在しないカラムのデータが無くなってしまう
        ...state,
        ...action.payload,
        // スプレット構文なしだと以下のようになってしまう
        // isSignedIn: action.payload.isSignedIn,
        // uid: action.payload.uid,
        // username: action.payload.username,
      };
    default:
      return state;
  }
};
