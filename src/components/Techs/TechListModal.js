import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchTechs } from '../../redux/slice/techsReducer';

import TechItem from './TechItem';

const TechListModal = () => {
  const modalHeader = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const dispatch = useDispatch();
  const techsStatus = useSelector((state) => state.techs.status);

  useEffect(() => {
    if (techsStatus === 'idle') {
      dispatch(fetchTechs());
    }
  }, [dispatch, techsStatus]);

  const techs = useSelector((state) => state.techs.items);

  return (
    <div className='modal' id='tech-list-modal'>
      <div className='modal-content'>
        <div className='modal-header' style={modalHeader}>
          <h5>Technician List</h5>
          <a href='!#' className='modal-close'>
            <i className='material-icons deep-purple-text text-accent-2'>
              close
            </i>
          </a>
        </div>

        <ul className='collection'>
          {techs && techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
