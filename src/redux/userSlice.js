import {createSlice} from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "name",
  email: "email",
  initialState: {
    name: "",
    email: "",
    password: "",
    isLogged: false,
  },
  reducers: {
    changeUser(state, {payload}) {
      return{...state, isLogged: true, name:payload.name, email:payload.email, password:payload.password}
    },
    logout(state) {
      return{...state, isLogged: false, name:"" ,email: ""}
    }
  }
});
export const {changeUser, logout} = slice.actions;

export const selectUser = state => state.user;

export default slice.reducer;