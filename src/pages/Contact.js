

import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

import Layout from '../Components/Layout/Layout';
import { useHelperFunction } from '../utils/helperFuntion';
import LineClipPath from '../Components/Slice/LineClipPath';
import '../assets/styles/contact.scss';

import AlertPopup from '../Components/Slice/AlertPopup';
function Contact() {
    const [alert, setAlert] = useState({message: '', type: '', isVisible: false});
    //form fields   
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    useHelperFunction('Contact |');

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_ptae8fe', 'template_gq5izz6', form.current, 'w-rjpWx0cbWeWkXV6')
        .then((result) => {
            resetForm();
            setAlert({message: 'Email Sent Successfully', type: 'success', isVisible: true});
        }, (error) => {
            setAlert({message: 'Failed to send the message.', type: 'error', isVisible: true});
        });
    };

    const resetForm = () => {
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <Layout>
            <AlertPopup
                alertInfo={alert}
                onClose={() => setAlert(alert.isVisible = false)}
            />
            <div className=' container contact'>
                <div className="form-container">
                    <h3 className='font-weight-bold pb-3'>Say hello!</h3>
                    <LineClipPath xtraClass={'grid-100 pb-4'}/>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="group">
                            <input type="text" 
                                required 
                                className='form-input' 
                                name='name' 
                                onChange={(e) => setName(e.target.value)} 
                                value={name}/>

                            <span className="bar"></span>
                            <label>Name</label>
                        </div>
                        <div class="group">
                            <input type="email" 
                                required 
                                name='email' 
                                className='form-input' 
                                placeholder='' 
                                onChange={(e) => setEmail(e.target.value)} 
                                value={email}/>
                                
                            <span className="bar"></span>
                            <label>Your Email</label>
                            <span className="validation-text">
                                <i class="fa-solid fa-triangle-exclamation"></i> Please enter a valid email address.
                            </span>
                        </div>
                        <div className="group">
                            <textarea required 
                                id="message" 
                                name="message" 
                                rows="0" 
                                className='form-input'  
                                onChange={(e) => setMessage(e.target.value)} 
                                placeholder='' 
                                value={message}></textarea>
                            <span className="bar"></span>
                            <label>Message</label>
                        </div>
                        
                        <button type="submit" className="link link-full" ><i class="fa-solid fa-chevron-right"></i> Send Message</button>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default Contact;

