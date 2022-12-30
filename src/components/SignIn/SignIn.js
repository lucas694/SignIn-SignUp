import "./SignIn.css";
import {useState} from "react";
import {TfiArrowCircleLeft} from "react-icons/tfi";
import BtnVariant from "../Buttons/Btn-Variant";
import {FaFacebook, FaGoogle} from "react-icons/fa";
import {Link} from "react-router-dom";



const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("")

    if(email == ""){
      setError("Preencha seu E-mail")
      return
    }
    if(password == ""){
      setError("Preencha sua Senha")
      return
    }
    if(password.length < 6){
      setError("A senha Precisa ter ao menos 6 Dígitos")
      return
    }
  }
  return(
    <div className={"SignInContainer"}>
      <div className={"HeaderSec"}>

        <Link to={"/SignUp"}>
          <button className={"Btn-Back"}>
            <TfiArrowCircleLeft className={"ArrowLeftIcon"}/>Back
          </button>
        </Link>
        <p>I don't have an account! <Link to={"/SignUp"}><a>Sign Up</a></Link></p>
      </div>

      <div className={"FormContent"}>
        <h1 className={"FormTittle"}>Login Your Account</h1>
        <form className={"SignInForm"} onSubmit={handleSubmit}>
          <div className={"FormSections"}>
            <label>
              <span>E-mail:</span>
              <input type="email"
                     name="email"
                     required
                     placeholder={"E-mail"}
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     className={"InputSignIn"}/>
            </label>
          </div>
          <div className={"FormSections"}>
            <label>
              <span>Senha:</span>
              <input type="password"
                     name="password"
                     required
                     placeholder={"Insira sua senha"}
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     className={"InputSignIn"}
              />
            </label>
          </div>
          {error && <p className={"error"}>{error}</p>}
          <div className={"BtnSec"}>
            <BtnVariant className={"Btn-SignIn"}
                        btnText={"Sign In"}
                        onClick={handleSubmit}
            />
            <a>Forgot Your Password ?</a>
          </div>
            <div className={"BtnSec"}>
              <BtnVariant className={"Btn-Google"}
                          btnText={"Sign In with Google"}
                          btnIcon={<FaGoogle className={"GoogleIcon"} />}
              />
              <BtnVariant className={"Btn-Facebook"}
                          btnText={"Sign In with Facebook"}
                          btnIcon={<FaFacebook className={"FacebookIcon"} />}
              />
            </div>
        </form>
      </div>
      <footer>
        <p> Copyright &copy; 2023</p>
      </footer>
    </div>
  )
}; export default SignIn;