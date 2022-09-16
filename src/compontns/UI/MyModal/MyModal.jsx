import React from 'react';
import cl from './MyModal.module.css';

const MyModal = ({ children, visible, setVisible }) => {

    const rootClass = [cl.myModal];
    if (visible) {
        rootClass.push(cl.active);
    }

    return (
        <div onClick={() => setVisible(false)} className={rootClass.join(' ')}>
            <div onClick={(e) => e.stopPropagation()} className={cl.myModalContent}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;
