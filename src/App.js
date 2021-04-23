import { useEffect, Fragment } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./components/SearchBar";
import Logs from "./components/Logs/Logs";
import AddBtn from "./components/AddBtn";
import AddLogModal from "./components/Logs/AddLogModal";
import EditLogModal from "./components/Logs/EditLogModal";

const App = () => {
  useEffect(() => {
    // init Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />
      <Logs />
      <AddBtn />
      <AddLogModal />
      <EditLogModal />
    </Fragment>
  );
};

export default App;
