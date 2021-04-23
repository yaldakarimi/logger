import { useEffect } from "react";
import { fetchLogs } from "../../redux/slice/logsReducer";
import { useDispatch, useSelector } from "react-redux";
import LogItem from "./LogItem";

const Logs = () => {
  const dispatch = useDispatch();
  const logs = useSelector((state) => state.logs.items);
  useEffect(() => {
    dispatch(fetchLogs());
  }, [dispatch]);

  return (
    <div className='container'>
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
    </div>
  );
};

export default Logs;
