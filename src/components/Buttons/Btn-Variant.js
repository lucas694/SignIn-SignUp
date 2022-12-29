import "./Btn-Variant.css"


const BtnVariant =(props) =>{
  return(
    <div>
      <button className={props.className} onClick={props.onClick}> {props.btnIcon}{props.btnText}</button>
    </div>
  )
}; export default BtnVariant;