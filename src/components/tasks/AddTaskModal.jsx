import React from 'react';
import Modal from '../ui/Modal';

const AddTaskModal = ({isOpen, setIsOpen}) => {
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Hero"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident veniam nihil vitae repellat a necessitatibus omnis nobis fuga nostrum alias!</p></Modal>
    );
};

export default AddTaskModal;