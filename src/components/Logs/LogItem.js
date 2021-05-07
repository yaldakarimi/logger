import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import M from 'materialize-css/dist/js/materialize.min.js';
import { useDispatch } from 'react-redux';
import { deleteLog, setCurrent } from '../../redux/slice/logsReducer';

const LogItem = ({ log }) => {
  const dispatch = useDispatch();
  const onDelete = (id) => {
    dispatch(deleteLog(id));
    M.toast({ html: 'Log Deleted' });
  };

  const onSetCurrent = () => {
    dispatch(setCurrent(log));
  };
  return (
    <div>
      <a
        href='#edit-log-modal'
        className={`modal-trigger ${
          log.attention ? 'deep-orange-text ' : 'green-text text-accent-4'
        }`}
        onClick={onSetCurrent}
      >
        {log.message}
      </a>
      <p className='blue-grey-text text-darken-1 '>
        <span>
          <span>
            ID <span className='black-text'>#{log.id}</span>
          </span>
          <span>
            {' '}
            Last Updated By: <strong className='black-text'>{log.tech} </strong>
            on <Moment format='MMMM Do YYYY h:mm:ss a'>{log.date}</Moment>
          </span>
        </span>

        <a
          href='#!'
          className='secondary-content'
          onClick={() => onDelete(log.id)}
        >
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
