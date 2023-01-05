import "./MyProfile.css"
import {useSelector} from "react-redux";
import Sidebar from "./Sidebar";


const MyProfile = () =>{
  return(
    <div className={"ProfileContainer"}>
      <Sidebar/>
    </div>
  )
}; export default MyProfile;