import "./Sidebar.css"
import female from "../assets/userFemale.png"
//icons
import { FaHome } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import { IoChatbubbles } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { FiHelpCircle } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { BiMoon } from "react-icons/bi";
//
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {logout} from "../redux/userSlice";


const Sidebar = () => {
  const userName = useSelector(state => state.user.name)
  const Status = useSelector(state => state.user.isLogged)
  const navegate = useNavigate();
  const dispatch = useDispatch();

  console.log(Status ? "Logado" : "Deslogado")

  const logoutRequest = () => {
    dispatch(logout())
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
              <li>
                <button className={"listSidebar"} onClick={signInRequest}>
                  <FaHome className={"IconLi"}/>
                  <span className={"SpanLi"}>Home</span>
                </button>
              </li>
              <li>
                <button className={"listSidebar"}>
                  <RxDashboard className={"IconLi"}/>
                  <span className={"SpanLi"}>Dashboard</span>
                </button>
              </li>
              <li>
                <button className={"listSidebar"}>
                  <BsFillChatSquareDotsFill className={"IconLi"}/>
                  <span className={"SpanLi"}>Messages</span>
                </button>
              </li>
              <li>
                <button className={"listSidebar"}>
                  <IoChatbubbles className={"IconLi"}/>
                  <span className={"SpanLi"}>Chat</span>
                </button>
              </li>
              <li>
                <button className={"listSidebar"}>
                  <IoSettingsSharp className={"IconLi"}/>
                  <span className={"SpanLi"}>Settings</span>
                </button>
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
              <button onClick={logoutRequest} className={"listSidebar"}>
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