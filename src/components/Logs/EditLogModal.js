import React, { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { useSelector, useDispatch } from 'react-redux';
import { updateLog, clearCurrent } from '../../redux/slice/logsReducer';

const EditLogModal = () => {
  const modalStyle = {
    width: '75%',
    height: '75%',
  };
  const dispatch = useDispatch();
  const currentLog = useSelector((state) => state.logs.current);

  const [message, setMessage] = useState('');
  const [tech, setTech] = useState('');
  const [attention, setAttention] = useState(false);

  useEffect(() => {
    if (currentLog) {
      setMessage(currentLog.message);
      setTech(currentLog.tech);
      setAttention(currentLog.attention);
    }
  }, [currentLog]);

  const onEdit = (e) => {
    e.preventDefault();
    if (message === '' || tech === '') {
      M.toast({ html: 'Write a message and select a technician please' });
    } else {
      const updatedLog = {
        id: currentLog.id, // important point to remember
        message,
        tech,
        date: new Date(),
        attention,
      };

      dispatch(updateLog(updatedLog));
      M.toast({ html: `Log updated by ${tech}` });
      dispatch(clearCurrent());
      setTech('');
      setMessage('');
      setAttention(false);
    }
  };

  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h5>Edit Log</h5>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              id='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
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
              <option value=''> Select Technician</option>
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

      <div className='modal-footer'>
        <div className='row'>
          <div className='col s12'>
            <a
              onClick={onEdit}
              href='#!'
              className='modal-close waves-effect waves-light btn deep-purple accent-2 '
              style={{ width: '100%' }}
            >
              Edit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditLogModal;
