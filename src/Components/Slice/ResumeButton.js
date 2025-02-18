import { NavLink } from "react-router-dom";
function ResumeButton() {
    return (
          <NavLink target={"_blank"} to={`https://drive.google.com/file/d/1HMaXx4BiTXcxwVbJVIrY9GjfwUCcXmBU/view?usp=sharing`} className="button-50 button" >
              View My Resume &nbsp;<i className="fa-solid fa-arrow-right text-center"></i>
          </NavLink>
    )
}

export default ResumeButton;