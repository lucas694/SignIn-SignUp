import "./Login.css"
import loginImg from "../assets/login_img.png"
import SignIn from "./Sign In/SignIn";


const Login = () => {
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
        <SignIn />
      </div>

    </div>
  )
}; export default Login;