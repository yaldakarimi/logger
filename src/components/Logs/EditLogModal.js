import { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const EditLogModal = () => {
  const modalStyle = {
    width: "75%",
    height: "75%",
  };
  const [message, setMessage] = useState("");
  const [tech, setTech] = useState("");
  const [attention, setAttention] = useState(false);

  const onEdit = (e) => {
    e.preventDefault();
    if (message === "" || tech === "") {
      M.toast({ html: "Write a message and select a technician please" });
    } else {
      console.log("edited");
      setTech("");
      setMessage("");
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
            <label htmlFor='message'>Edit Message</label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              onChange={(e) => setTech(e.target.value)}
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
              style={{ width: "100%" }}
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
