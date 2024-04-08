import React from 'react';
import '../../assets/styles/AlertPopup.scss'; // Make sure to create this CSS file for styling

const AlertPopup = ({ alertInfo, onClose }) => {
  if (!alertInfo.isVisible) return null;

  return (
    <div className="alert-backdrop">
      <div className="alert-box">
        <button onClick={onClose} className='close'><i class="fa-solid fa-xmark"></i></button>
        <div className='type'>
          { alertInfo.type === 'success'? (
            <>
              <i class="fa-regular fa-circle-check text-success"></i>
              <h3 className='pt-2'>Success!</h3>
            </>
          ): 
          (
            <>
              <i class="fa-solid fa-exclamation error"></i>
              <h3 className='pt-2'>Opps, sorry!</h3>
            </>
          )}
        </div>
        <p>{alertInfo.message}</p>
        <button onClick={onClose} className='link link-full'>Okay</button>
      </div>
    </div>
  );
};

export default AlertPopup;
