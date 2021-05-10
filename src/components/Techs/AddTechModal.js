import { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { useDispatch } from 'react-redux';
import { addTech } from '../../redux/slice/techsReducer';

const AddTechModal = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const dispatch = useDispatch();

  const addHandler = (e) => {
    e.preventDefault();
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter a first name and a last name' });
    } else {
      const newTech = {
        firstName,
        lastName,
      };
      dispatch(addTech(newTech));
      M.toast({ html: `${firstName} ${lastName} was added as a technician` });
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <div className='modal' id='add-tech-modal'>
      <div className='modal-content'>
        <h5>Add Technician</h5>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              id='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName'>First Name</label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              id='lastName'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor='lastName'>Last Name: </label>
          </div>
        </div>

        <div className='modal-footer'>
          <a
            href='#!'
            className='modal-close waves-effect waves-light btn deep-purple accent-2 '
            onClick={addHandler}
            style={{ width: '100%' }}
          >
            Add
          </a>
        </div>
      </div>
    </div>
  );
};

export default AddTechModal;
