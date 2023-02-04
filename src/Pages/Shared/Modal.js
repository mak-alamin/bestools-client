import React from 'react';

const Modal = ({id, content}) => {
    return (
        <div className='bestools-modal'>

            <input type="checkbox" id={id} className="modal-toggle" />

            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor={id} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    {content}

                </div>
            </div>
        </div>
    );
};

export default Modal;