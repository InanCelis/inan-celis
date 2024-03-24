import React from 'react';

function Footer() {
    return (
      <footer className='d-flex justify-content-center p-5 h-100'>
        <div>© {(new Date().getFullYear())} Inan Celis. <u>Crafted by yours truly</u></div>
      </footer>
      
    )
}

export default Footer;