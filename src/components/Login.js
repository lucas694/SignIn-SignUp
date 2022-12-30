import "./Login.css"
import loginImg from "../assets/login_img.png"
import SignUp from "./Sign In/SignUp";


const Login = (props) => {
  return(
    <div className={"LoginContainer"}>
      <div className={"ContentLeft"}>
        <section className={"TextSec"}>
          <h1>Welcome Back!</h1>
        </section>
        <div className={"ImgSec"}>
          <img className={"LoginImg"} src={loginImg} alt={"Login"}/>
        </div>
      </div>
      <div className={"ContentRight"}>
        {props.LoginPage}
      </div>

    </div>
  )
}; export default Login;