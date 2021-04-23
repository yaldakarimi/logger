import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const LogItem = ({ log }) => {
  return (
    <div>
      <a
        href='#edit-log-modal'
        className={`modal-trigger ${
          log.attention ? "deep-orange-text " : "green-text text-accent-4"
        }`}
      >
        {log.message}
      </a>
      <p className='blue-grey-text text-darken-1 '>
        <span>
          <span>
            ID <span className='black-text'>#{log.id}</span>
          </span>
          <span>
            {" "}
            Last Updated By: <strong className='black-text'>{log.tech} </strong>
            on <Moment format='MMMM Do YYYY h:mm:ss a'>{log.date}</Moment>
          </span>
        </span>

        <a href='#!' className='secondary-content'>
          <i className='material-icons blue-grey-text text-lighten-1'>delete</i>
        </a>
      </p>
    </div>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
