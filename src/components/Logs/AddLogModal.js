import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import { addLog } from '../../redux/slice/logsReducer';

const AddLogModal = () => {
  const modalStyle = {
    with: '75%',
    height: '75%',
  };
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const [tech, setTech] = useState('');
  const [attention, setAttention] = useState(false);

  const submitHandler = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Write a message and select a technician please' });
      return;
    }
    const newLog = {
      message,
      tech,
      attention,
      date: new Date(),
    };
    dispatch(addLog(newLog));

    M.toast({ html: `Log added by ${tech}` });
    // Clear Fields

    setMessage('');
    setTech('');
    setAttention(false);
  };
  return (
    <div id='add-log-modal' className='modal' style={modalStyle}>
      {/* Content */}
      <div className='modal-content'>
        <h5>Enter System Log</h5>
        <div className='row'>
          <div className='input-field'>
            <i className='material-icons prefix'>mode_edit</i>
            <input
              type='text'
              id='message'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Log Message
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              onChange={(e) => setTech(e.target.value)}
              className='browser-default'
            >
              <option value='' disabled>
                Select Technician
              </option>
              <option value='John Doe'>John Doe</option>
              <option value='Sam Smith'>Sam Smith</option>
              <option value='Sara Wilson'>Sara Wilson</option>
            </select>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <label>
              <input
                type='checkbox'
                className='filled-in'
                checked={attention}
                value={attention}
                onChange={() => setAttention(!attention)}
              />
              <span>Needs Attention</span>
            </label>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className='modal-footer'>
        <div className='row'>
          <div className='col s12'>
            <button
              className='modal-close waves-effect waves-light btn deep-purple accent-2 '
              onClick={submitHandler}
              style={{ width: '100%' }}
              type='button'
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLogModal;
