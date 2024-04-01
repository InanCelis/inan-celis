

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import Layout from '../Components/Layout/Layout';
import { useHelperFunction } from '../utils/helperFuntion';
import LineClipPath from '../Components/Slice/LineClipPath';
import '../assets/styles/contact.scss';
function Contact() {

    const [fieldValue, setFieldValue] = React.useState('');
    const handleBlur = (e) => setFieldValue(e.target.value);
    
    useHelperFunction('Contact |');

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ptae8fe', 'template_gq5izz6', form.current, 'w-rjpWx0cbWeWkXV6')
        .then((result) => {
            console.log(result.text);
            alert("Email sent successfully!");
        }, (error) => {
            console.log(error.text);
            alert("Failed to send the email.");
        });
    };
    return (
        <Layout>
        <div className=' '>
            <div className=' container contact'>
                <div className="form-container">
                    <h3 className='font-weight-bold pb-3'>Say hello!</h3>
                    <LineClipPath xtraClass={'grid-100 pb-4'}/>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="group">
                            <input type="text" required className='form-input' name='name'/>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Name</label>
                        </div>
                        <div class="group">
                            <input type="email" required  className='form-input' placeholder='' onChange={handleBlur} value={fieldValue}/>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Your Email</label>
                            <span className="validation-text">Please enter a valid email address.</span>
                        </div>
                        <div className="group">
                            <textarea  id="message" name="message" rows="0" className='form-input' placeholder=''></textarea>
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Message</label>
                        </div>
                        
                        <button type="submit" className="link link-full" ><i class="fa-solid fa-chevron-right"></i> Send Message</button>
                    </form>
                </div>
            </div>
        </div>
        </Layout>
    );
}

export default Contact;

