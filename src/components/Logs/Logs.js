import { useEffect, useState } from "react";
import axios from "axios";
import LogItem from "./LogItem";

const Logs = () => {
  const [logs, setLogs] = useState([]);
  useEffect(() => {
    const getLogs = async () => {
      const res = await axios.get("/logs");
      setLogs(res.data);
    };
    getLogs();
  }, []);

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
