import { useEffect } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/Logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/Logs/AddLogModal';
import EditLogModal from './components/Logs/EditLogModal';
import AddTechModal from './components/Techs/AddTechModal';
import TechListModal from './components/Techs/TechListModal';

const App = () => {
  useEffect(() => {
    // init Materialize JS
    M.AutoInit();
  });
  return (
    <>
      <SearchBar />
      <Logs />
      <AddBtn />
      <AddLogModal />
      <EditLogModal />
      <AddTechModal />
      <TechListModal />
    </>
  );
};

export default App;
