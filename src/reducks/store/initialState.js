// Storeの初期状態を管理
// アプリに必要なstateをすべて記述する
// この値はreducerで用いるので、exportしておく
const initialState = {
  users: {
    icon: "",
    isSignedIn: false,
    uid: "",
    username: "",
  },
  // products: {
  //   price: "",
  // },
};

export default initialState;
