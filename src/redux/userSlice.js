import {createSlice} from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "name",
  email: "email",
  password: "",
  initialState: {
    name: "",
    email: "",
    password: "",
    isLogged: false,
  },
  reducers: {
    createUser(state, {payload}) {
      return{...state, name:payload.name, email:payload.email, password:payload.password}
    },
    loginUser(state, {payload}) {
      return{...state, isLogged: true, email:payload.email, password:payload.password}
    },
    logout(state) {
      return{...state, isLogged: false, name:"" ,email: ""}
    }
  }
});
export const {createUser, loginUser, logout} = slice.actions;

export default slice.reducer;