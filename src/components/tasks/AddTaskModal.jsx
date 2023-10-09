import React from 'react';
import Modal from '../ui/Modal';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/features/tasks/taskSlice';

const AddTaskModal = ({isOpen, setIsOpen}) => {

    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch();
    
    const onCancel = ()=>{
         reset();
         setIsOpen(false);
    }
     const onSubmit = (data) =>{
        dispatch(addTask(data))
        onCancel()
     }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Programming Hero">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="title">Title</label>
                <input className='w-full rounded-md' type="text" id='title'{...register('title')}/>
                </div>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="title">Description</label>
                <input className='w-full rounded-md' type="text" id='description'{...register('description')}/>
                </div>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="title">Deadline</label>
                <input className='w-full rounded-md' type="date"  id='date'{...register('date')}/>
                </div>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="title">Assign to</label>
                <select className='w-full rounded-md' type="text" id='assignedTo'{...register('assignedTo')} >
                   <option value="isha khan">Isha khan</option>
                   <option value="enamul haque">Enamul haque</option>
                   <option value="kabir">kabir</option>
                   <option value="emran hussain">Emran hussain</option>
                   <option value="shihab">shihab</option>
                   <option value="tanvir">tanvir</option>
                   <option value="ahsan">ahsan</option>
                   <option value="ajijul">ajijul</option>
                   <option value="shumon">shumon</option>
                   <option value="shafin">shafin</option>
                   <option value="choyon">choyon</option>
                   <option value="ripon">ripon</option>
                   <option value="rakib">rakib</option>
                   <option value="kajol">kajol</option>
                </select>
                </div>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="title">Priority</label>
                <select className='w-full rounded-md' type="text" id='priority'{...register('priority')} >
                  <option defaultValue value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
                </div>
                <div className='flex gap-3 justify-end my-4'>
                   <button onClick={()=>onCancel()} className='btn btn-danger' type='button'>Cancel</button>
                   <button className='btn btn-primary' type='submit'>Submit</button>
                </div>
            </form>

        </Modal>
    );
};

export default AddTaskModal;