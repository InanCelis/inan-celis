
import ImageSlider from "./Slice/ImageSlider";
import data from '../api/skills.json';
function Skills() {
    const skills = data;
    return (
        <div className="container skills">
            <h3 className='font-weight-bold text-center pb-5'>Languages</h3>
            <div className="d-flex justify-content-center">
                <ImageSlider data={skills} />
            </div>
        </div>
      
    )
}

export default Skills;