import { fetchTechs } from "../../redux/slice/techsReducer";
import { useDispatch, useSelector } from "react-redux";
import TechItem from "./TechItem";
import { useEffect } from "react";
const TechListModal = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTechs());
  }, [dispatch]);

  const techs = useSelector((state) => state.techs.items);

  return (
    <div className='modal' id='tech-list-modal'>
      <div className='modal-content'>
        <h5>Technician List</h5>
        <ul className='collection'>
          {techs && techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
