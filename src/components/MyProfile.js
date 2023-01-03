import "./MyProfile.css"
import {useSelector} from "react-redux";


const MyProfile = () =>{
  const user = useSelector(state => state.email)
  console.log(user)
  return(
    <div>
      <p>a</p>
    </div>
  )
}; export default MyProfile;