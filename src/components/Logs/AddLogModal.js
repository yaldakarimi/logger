import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddLogModal = () => {
  const modalStyle = {
    with: "75%",
    height: "75%",
  };
  const [message, setMessage] = useState("");
  const [tech, setTech] = useState("");
  const [attention, setAttention] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (message === "" || tech === "") {
      M.toast({ html: "Write a message and select a technician please" });
    }
    console.log(message, tech, attention);

    setAttention(false);
    setMessage("");
    setTech("");
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor='message'>Log Message</label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              onChange={(e) => setTech(e.target.value)}
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
            <a
              href='#!'
              className='modal-close waves-effect waves-light btn deep-purple accent-2 '
              onClick={submitHandler}
              style={{ width: "100%" }}
            >
              Submit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLogModal;
