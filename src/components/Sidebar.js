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



const Sidebar = (props) => {
  return(
      <div className={"SidebarContainer"}>
        <div className={"SideBarUp"}>
          <div className={"SidebarHeader"}>
            <div className={"userBox"}>
              <img src={female} alt="User" className={"UserIcon"}/>
            </div>
            <section className={"SidebarHeaderText"}>
              <span>hello!</span>
              <h3 className={"SidebarUsername"}>{props.userName}</h3>
            </section>
          </div>
          <hr />
          <div className={"SidebarMain"}>
            <ul className={"SidebarList"}>
              <li>
                <FaHome className={"IconLi"}/>
                <span className={"SpanLi"}>Home</span>
              </li>
              <li>
                <RxDashboard className={"IconLi"}/>
                <span className={"SpanLi"}>Dashboard</span>
              </li>
              <li>
                <BsFillChatSquareDotsFill className={"IconLi"}/>
                <span className={"SpanLi"}>Messages</span>
              </li>
              <li>
                <IoChatbubbles className={"IconLi"}/>
                <span className={"SpanLi"}>Chat</span>
              </li>
              <li>
                <IoSettingsSharp className={"IconLi"}/>
                <span className={"SpanLi"}>Settings</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={"SidebarDown"}>
          <ul className={"SidebarList"}>
            <li>
              <FiHelpCircle className={"IconLi"}/>
              <span className={"SpanLi"}>Help Center</span>
            </li>
            <li>
              <FiLogOut className={"IconLi"}/>
              <span className={"SpanLi"}>Log Out</span>
            </li>
            <hr/>
            <li>
              <BiMoon className={"IconLi"}/>
              <span className={"SpanLi"}>Nighmode</span>
            </li>
          </ul>
        </div>
      </div>
  )
};
export default Sidebar;