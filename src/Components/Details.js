import React from 'react';

function Details() {
    return (
        <div className='project container' id='project' key={p.id}>
            <div className='content'>
                <div className={`details ${p.id%2 ===0 ? "order-last": ""}`}>
                    <div  className="_index_1cfqm_192"><div className="_divider_ucnqf_2">
                        <div className="_line_ucnqf_8" data-collapsed="false"></div>
                        <div className="_notch_ucnqf_30" data-collapsed="false" ></div>
                        </div><span className="_indexNumber_1cfqm_201">{`0${p.id}`}</span>
                    </div>
                    <h3 className='title-4 m-0 pb-2'>{p.company}</h3>
                    <p className="text-muted mb-4 mb-md-5 f-text-m">
                        {p.description}
                    </p>
                    <NavLink to={p.link} className="button-52 button" >View project &nbsp;<i className="fa-solid fa-arrow-right"></i></NavLink>
                </div>
                <div className='image'>
                    <img src={require(`../assets/images/project/${p.image}`)}  className="my-image" alt={p.company}/>
                </div>
            </div>
        </div> 
    )
}

export default Details;