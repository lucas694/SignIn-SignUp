import "./Sidebar.css"
import female from "../assets/userFemale.png"
import { FaHome } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import { IoChatbubbles } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { FiHelpCircle } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { BiMoon } from "react-icons/bi";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {logout} from "../redux/userSlice";


const Sidebar = () => {
  const userName = useSelector(state => state.user.name)
  const Status = useSelector(state => state.user.isLogged)

  const navegate = useNavigate();
  const dispatch = useDispatch();

  console.log(Status)

  const logoutRequest = () => {
    dispatch(logout())
    alert("Você foi Deslogado, Clique em Logout e Faça Login Novamente! ")
  }
  const signInRequest = () => {
    navegate("/SignIn")
  }

  return(
      <div className={"SidebarContainer"}>
        <div className={"SideBarUp"}>
          <div className={"SidebarHeader"}>
            <div className={"userBox"}>
              <img src={female} alt="User" className={"UserIcon"}/>
            </div>
            <section className={"SidebarHeaderText"}>
              <span>hello!</span>
              <h3 className={"SidebarUsername"}>{userName}</h3>
            </section>
          </div>
          <hr />
          <div className={"SidebarMain"}>
            <ul className={"SidebarList"}>
              <li className={"listSidebar"}>
                <FaHome className={"IconLi"}/>
                <span className={"SpanLi"}>Home</span>
              </li>
              <li className={"listSidebar"}>
                <RxDashboard className={"IconLi"}/>
                <span className={"SpanLi"}>Dashboard</span>
              </li>
              <li className={"listSidebar"}>
                <BsFillChatSquareDotsFill className={"IconLi"}/>
                <span className={"SpanLi"}>Messages</span>
              </li>
              <li className={"listSidebar"}>
                <IoChatbubbles className={"IconLi"}/>
                <span className={"SpanLi"}>Chat</span>
              </li>
              <li className={"listSidebar"}>
                <IoSettingsSharp className={"IconLi"}/>
                <span className={"SpanLi"}>Settings</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={"SidebarDown"}>
          <ul className={"SidebarList"}>
            <li className={"listSidebar"}>
              <FiHelpCircle className={"IconLi"}/>
              <span className={"SpanLi"}>Help Center</span>
            </li>
            <li>
              <button onClick={Status ? logoutRequest : signInRequest} className={"listSidebar"}>
                <FiLogOut className={"IconLi"}/>
                <span className={"SpanLi"}>Log Out</span>
              </button>
            </li>
            <hr/>
            <li className={"listSidebar"}>
              <BiMoon className={"IconLi"}/>
              <span className={"SpanLi"}>Nighmode</span>
            </li>
          </ul>
        </div>
      </div>
  )
};
export default Sidebar;