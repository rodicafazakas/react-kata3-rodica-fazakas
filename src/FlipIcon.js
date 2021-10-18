import {useState} from "react";

const FlipIcon = ({icon1, icon2}) => {
  let [icon, setIcon] = useState(true);

  return (
    <i className={icon ? icon1 : icon2} onClick={ () => setIcon(!icon) }></i>
  )

}

export default FlipIcon;