import { NavLink } from 'react-router-dom';
import LineClipPath from './Slice/LineClipPath';
import '../assets/styles/details.scss';

function Details() {
    return (
        <div className='details-about container'>
            <div className='content'>
                <div className={`details`}>
                    <h3 className='font-weight-bold pb-3'>Hello there</h3>
                    <p className="text-muted mb-4  f-text-m">
                    Hello! I'm a passionate web developer with a flair for crafting intuitive and 
                    engaging digital experiences. With expertise in HTML, CSS, JavaScript, and a 
                    love for exploring the latest in React and Node.js, I continuously strive to 
                    push the boundaries of web development. My portfolio showcases a variety of 
                    projects, from sleek corporate websites to dynamic web applications. <br/><br/>When I'm 
                    not coding, you'll find me surrounded by my pets. As an avid animal lover, 
                    I believe in the comforting companionship they provide. This unique blend of 
                    technical skill and empathy enriches my approach to problem-solving and teamwork,
                    making me a versatile and compassionate developer.
                    </p>
                    <NavLink target={"_blank"} to={`#`} className="link" >
                    <i class="fa-regular fa-paper-plane"></i> <span>Send Message</span>
                    </NavLink>
                </div>
                <div className='image'>
                    <LineClipPath content={`About me`} textClass={'f-text-s'}/>
                    <img src={require(`../assets/images/me-at-office.jpg`)}  className="shadow" />
                </div>
            </div>
        </div> 
    )
}

export default Details;