
import "../assets/styles/work.scss";
function Work() {
    return (
      <div className="work container">
        <h3 className='font-weight-bold text-center pb-5'>Professional Experience</h3>
        <div className="w-item shadow">
            <div className="w-header">
                <div className="company-position">
                    Software Engineer - Full-time
                </div>
                <div className="year">March 2023 - Present</div>
            </div>
            <div className="w-content">
                <div className="w-details">
                    <p className="font-weight-bold f-text-m">Accenture</p>
                    <span className="pr-3"><i class="fa-solid fa-location-dot textMain"></i> Taguig, Philippines</span>
                    <span><a href="https://www.accenture.com/" target="_blank"><i class="fa-solid fa-link textMain"></i> accenture.com</a></span>
                   
                    <p className="pt-3">
                        <b>Responsibilities</b> 
                        <ul className="text-muted">
                            <li>Develop and maintain front end component of the ERP</li>
                            <li>Collaborating with back-end developers and B2B endpoints on the integration of elements.</li> 
                            <li>Running diagnostic tests, repairing defects, and providing technical support.</li>
                            <li>Recommending and implementing improvements to processes and solutions.</li>
                            <li>Implement and apply Continuous Integration and Continuous Development practices.</li>
                        </ul>
                    </p>
                    <div className="tool-used">
                        <span>Asp.net</span>
                        <span>C#</span>
                        <span>Oracle</span>
                    </div>
                </div>
                <div className="w-logo">
                <img src={require(`../assets/images/company/acn.png`)}  className="my-image"/>
                </div>
            </div>
        </div>
      </div>
      
    )
}

export default Work;