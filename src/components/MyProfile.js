import "./MyProfile.css"
import {useSelector} from "react-redux";
import Sidebar from "./Sidebar";


const MyProfile = () =>{
  const user = useSelector(state => state.user)
  console.log(user)
  return(
    <div className={"ProfileContainer"}>
      <Sidebar userName={user.name}/>
    </div>
  )
}; export default MyProfile;