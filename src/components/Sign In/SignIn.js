import "./SignIn.css"
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import BtnVariant from "../Buttons/Btn-Variant";
import {useState} from "react";


const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("")

    const user ={
      name,
      email,
      password,
    }
    if(password !== confirmPassword){
      setError("As senhas precisam ser iguais")
      return
    }
    console.log(user)
  }

  return(
    <div className={"SignInContainer"}>
      <div className={"HeaderSec"}>
        <button className={"Btn-Back"}>
          <TfiArrowCircleLeft className={"ArrowLeftIcon"}/>Back
        </button>
        <p>I have an account! <a>Sign Up</a></p>
      </div>

      <div className={"FormContent"}>
        <h1 className={"FormTittle"}>Create your Account</h1>
        <div className={"BtnSec"}>
          <BtnVariant className={"Btn-Google"}
                      btnText={"Sign In with Google"}
                      btnIcon={<FaGoogle className={"GoogleIcon"}/>}
          />
          <BtnVariant className={"Btn-Facebook"}
                      btnText={"Sign In with Facebook"}
                      btnIcon={<FaFacebook className={"FacebookIcon"}/>}
          />
        </div>
        <p>Or sign in with login and password</p>
        <form className={"SignInForm"} onSubmit={handleSubmit}>
          <div className={"FormSections"}>
            <label>
              <span>Name:</span>
              <input type="name"
                     name="name"
                     required
                     placeholder={"Digite seu nome"}
                     value={name}
                     onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
              <span>E-mail:</span>
              <input type="email"
                     name="email"
                     required
                     placeholder={"E-mail"}
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}/>
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
              />
            </label>
            <label>
              <span>Confirme sua Senha:</span>
              <input type="password"
                     name="password"
                     required
                     placeholder={"Confirme sua senha"}
                     value={confirmPassword}
                     onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>
          </div>
          {error && <p className={"error"}>{error}</p>}
          <div className={"BtnSec"}>
            <BtnVariant className={"Btn-SignIn"}
                        btnText={"Sign In"}/>
          </div>
        </form>
      </div>
      <footer>
        <p> Copyright &copy; 2023</p>
      </footer>
    </div>
  )
}; export default SignIn;