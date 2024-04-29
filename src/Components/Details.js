import React, { useEffect, useState }from 'react';
import { NavLink } from 'react-router-dom';
import LineClipPath from './Slice/LineClipPath';
import '../assets/styles/details.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
function Details() {

    const [age, setAge] = useState('');
    useEffect(() => {
        var birthday = '1998-09-04';
        var calculatedAge = calculate_age(birthday);
        setAge(calculatedAge);
    }, [])

    const calculate_age = (dob1) => {
        var today = new Date();
        var birthDate = new Date(dob1);  // create a date object directly from `dob1` argument
        var age_now = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
        {
            age_now--;
        }
        console.log(age_now);
        return age_now;
    }
    return (
        <>
        <div className='details-about container'>
            <div className='content'>
                <div className={`details`}>
                    <h3 className='font-weight-bold pb-3'>Hello there</h3>
                    <p className="text-muted f-text-m pb-4">
                        <b>Inan</b> is a dedicated web developer with a deep passion 
                        for frontend technologies. My journey in web development 
                        started with a fascination for creating intuitive and engaging 
                        user interfaces. Over the years, I've honed my skills in HTML, 
                        CSS, JavaScript, and frameworks like React, WordPress, Laravel always aiming 
                        to deliver seamless web experiences. <br/><br/>Beyond coding, my life is enriched by my 
                        love for pets. Whether it's a break for a play or simply having a furry 
                        friend by my side while I code, they remind me of the importance of 
                        balance and empathy, qualities I bring into my development projects.
                    </p>
                    <NavLink to={`/contact`} className="link" >
                    <i className="fa-regular fa-paper-plane"></i> <span>Send Message</span>
                    </NavLink>
                    <div className='pt-5'>
                        <h4 className='f-text-m pb-2'>Personal Information</h4>
                        <div className='item-border pb-5'>
                            <div>  
                               <strong className='font-weight-bold text-muted f-text-s'>Name </strong>
                               <span>Ferdinand T. Celis</span>
                            </div> 
                            <div>  
                               <strong className='font-weight-bold text-muted f-text-s'>Birthday</strong>
                               <span>September 4, 1998</span>
                            </div> 
                            <div>  
                                <strong className='font-weight-bold text-muted f-text-s'>Age</strong>
                               <span>{age}</span>  
                            </div>  
                            <div>  
                                <strong className='font-weight-bold text-muted f-text-s'>Degree</strong>
                               <span>
                                    Bachelor of Science in Information Technology
                                </span>  
                            </div>  
                        </div>
                    </div>
                    
                </div>
                <div className='image'>
                    <LineClipPath content={`About me`} textClass={'f-text-s'}/>
                    <LazyLoadImage src={require(`../assets/images/me-at-office.jpg`)} />
                </div>
            </div>
        </div> 
        </>
    )
}

export default Details;