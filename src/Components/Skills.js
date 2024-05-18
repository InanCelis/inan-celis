
import ImageSlider from "./Slice/ImageSlider";
import data from '../api/skills.json';
function Skills() {
    const skills = data;
    return (
        <div className="container skills">
            <h3 className='font-weight-bold text-center pb-5' data-aos="fade-up">Skill Languages</h3>
            <div className="d-flex justify-content-center" data-aos="fade-up">
                <ImageSlider data={skills} />
            </div>
        </div>
      
    )
}

export default Skills;