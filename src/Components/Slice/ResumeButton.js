import { NavLink } from "react-router-dom";
function ResumeButton() {
    return (
        <div className='d-flex justify-content-center pb-5' data-aos="fade-up">
          <NavLink target={"_blank"} to={`https://drive.google.com/file/d/1DIU3FIlzbwXZA-gHGt4nmiUJs6EKfFHO/view?usp=sharing`} className="button-50 button" >
              View Full Resume &nbsp;<i className="fa-solid fa-arrow-right text-center"></i>
          </NavLink>
        </div>
    )
}

export default ResumeButton;