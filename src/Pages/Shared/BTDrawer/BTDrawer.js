import React, { useContext } from 'react';
import { bestoolContext } from '../../../App';

const BTDrawer = () => {  
    const {drawerContext} = useContext(bestoolContext);
    const {setDrawerInfo} = useContext(bestoolContext);

    const closeDrawer = () => {
        setDrawerInfo({
            isOpen: false,
            content: '',
            width: 30
        });
    }
    
    return (
      <>
      
      <div className={`drawer-overlay ${drawerContext?.isOpen ? "block" : "hidden"}`} onClick={closeDrawer}></div>
      
      <div className={`bestools-drawer ${drawerContext?.isOpen ? "active" : ""}`} style={{width: `${drawerContext.width}%`}}>
         
         <label className="btn btn-sm btn-circle absolute right-2 top-2" onClick={closeDrawer}>✕</label>

        <div className='drawer-content'>
          {drawerContext?.content}
        </div>
      </div>
      </>
    )
};

export default BTDrawer;