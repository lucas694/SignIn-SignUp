import "./SignUp.css"
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import BtnVariant from "../Buttons/Btn-Variant";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {createUser} from "../../redux/userSlice";
import {useDispatch} from "react-redux";



const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navegate = useNavigate();



  const handleSubmit = (e) => {
    dispatch(createUser({email, password,name}));
    e.preventDefault();

    setError("")

    const user ={
      name,
      email,
      password,
    }

    if(name === ""){
      return setError("Escreva seu nome")
    }else if(email === ""){
      return setError("Preencha seu E-mail")
    }else if(password === ""){
      return setError("Preencha sua Senha")
    }else if(password.length < 6){
      return setError("A senha Precisa ter ao menos 6 Dígitos")
    }else if(confirmPassword === ""){
      return setError("Confirme sua Senha")
    }else if(password !== confirmPassword){
      return setError("As senhas precisam ser iguais")
    } else{
      return navegate("/SignIn")
    }
    console.log(user)
  }

  return(
    <div className={"SignUpContainer"}>
      <div className={"HeaderSec"}>
        <Link to={"/SignIn"}>
          <button className={"Btn-Back"}>
            <TfiArrowCircleLeft className={"ArrowLeftIcon"}/>Back
          </button>
        </Link>
        <p>I have an account! <Link to={"/SignIn"}>Sign In</Link></p>
      </div>

      <div className={"FormContent"}>
        <h1 className={"FormTittle"}>Create your Account</h1>
        <div className={"BtnSec"}>
          <BtnVariant className={"Btn-Google"}
                      btnText={"Sign Up with Google"}
                      btnIcon={<FaGoogle className={"GoogleIcon"}/>}
          />
          <BtnVariant className={"Btn-Facebook"}
                      btnText={"Sign Up with Facebook"}
                      btnIcon={<FaFacebook className={"FacebookIcon"}/>}
          />
        </div>
        <p>Or sign up with login and password</p>
        <form className={"SignUpForm"} onSubmit={handleSubmit}>
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
                        btnText={"Sign Up"}
                        onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
      <footer>
        <p> Copyright &copy; 2023</p>
      </footer>
    </div>
  )
}; export default SignUp;