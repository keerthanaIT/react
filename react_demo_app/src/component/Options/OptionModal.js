import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
  return (
 <Modal 
 isOpen={!!props.openModal}
 contentLabel = "Selected options"
 onRequestClose={props.closeModal}
 >
    {props.openModal && <p>{props.openModal}</p>} 
    <button onClick={props.closeModal}>Close</button>
 </Modal>
  )
  
  
}
export default OptionModal;