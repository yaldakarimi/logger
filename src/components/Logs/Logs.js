import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import { fetchLogs } from '../../redux/slice/logsReducer';

import LogItem from './LogItem';

const Logs = () => {
  const dispatch = useDispatch();
  const logs = useSelector((state) => state.logs.items);
  const logsStatus = useSelector((state) => state.logs.status);
  useEffect(() => {
    if (logsStatus === 'idle') {
      dispatch(fetchLogs());
    }
  }, [dispatch, logsStatus]);

  let content;
  if (logsStatus === 'loading') {
    content = (
      <Loader
        type='BallTriangle'
        color='#651FFF'
        height={75}
        width={75}
        className='loader'
      />
    );
  } else {
    content = (
      <ul className='collection with-header'>
        <li className='collection-header'>
          <h3 className='center'>System Logs</h3>
        </li>

        {logs.length === 0 ? (
          <p className='center'>No Logs to show...</p>
        ) : (
          logs.map((log) => (
            <li className='collection-item' key={log.id}>
              <LogItem log={log} />
            </li>
          ))
        )}
      </ul>
    );
  }

  return <div className='container'>{content}</div>;
};

export default Logs;
