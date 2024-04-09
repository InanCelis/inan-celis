import LineClipPath from "./Slice/LineClipPath";
import data from '../api/expertise.json';
import '../assets/styles/expertise.scss';
function Expertise() {

    const expertise = data.slice(0, 3).map((ex, index) =>{
   
        return(
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 pb-0 pb-md-4 column" key={index}>
                <div className="card bgColor h-100" key={index}>
                    <LineClipPath content={``} xtraClass={'line-small'}/>
                    <div className="d-flex ex-header mt-4">
                        <i className={`${ex.icon}`}></i>
                        <h3>{ex.title}</h3>
                    </div>
                    <div className="mt-3">
                        <div><span className="text-muted">{ex.description}</span> </div>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div className="expertise container">
            <h3 className='font-weight-bold text-center pb-5'>My Expertise</h3>
            <div className="expertise-row row">
                {expertise}
            </div>
        </div>
      
    )
}

export default Expertise;